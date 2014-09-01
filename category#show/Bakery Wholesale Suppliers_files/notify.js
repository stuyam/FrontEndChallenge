(function() {
  var handleAlreadySubmittedOrders, notify, tryStringify, wrapCallback;

  notify = function(error) {
    Honeybadger.notify(error, {
      context: {
        description: "" + error.name + ": " + error.message
      }
    });
    throw error;
  };

  notify.wrapCallback = wrapCallback = function(originalCallback) {
    var wrapper;
    wrapper = function() {
      var error;
      try {
        return originalCallback.apply(this, arguments);
      } catch (_error) {
        error = _error;
        return notify(error);
      }
    };
    if (!originalCallback.guid) {
      originalCallback.guid = jQuery.guid++;
    }
    wrapper.guid = originalCallback.guid;
    wrapper.originalCallback = originalCallback;
    return wrapper;
  };

  tryStringify = function(object) {
    var error;
    try {
      if (JSON.stringify(object)) {
        return object;
      }
    } catch (_error) {
      error = _error;
      return "cant stringify object";
    }
  };

  handleAlreadySubmittedOrders = function(jqXHR) {
    if (jqXHR.responseJSON && jqXHR.responseJSON.errorType === "orderAlreadySubmitted") {
      alert("An order has been submitted in the background. We'll start a new order for you and refresh the page.");
      window.location = window.location;
      return true;
    }
    return false;
  };

  $(document).ajaxError(notify.wrapCallback(function(event, jqXHR, ajaxSettings, thrownError) {
    if (handleAlreadySubmittedOrders(jqXHR)) {
      event.stopImmediatePropagation();
      return;
    }
    return Honeybadger.notify(thrownError, {
      context: {
        event: tryStringify(event),
        url: ajaxSettings.url,
        type: ajaxSettings.type,
        jqXHR: tryStringify(jqXHR),
        ajaxSettings: tryStringify(ajaxSettings)
      }
    });
  }));

  this.sourcery || (this.sourcery = {});

  this.sourcery.notify = notify;

}).call(this);
