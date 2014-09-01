(function() {
  var notify;

  notify = this.sourcery.notify;

  $.fn.onevent = function() {
    var callbackIndex, error, wrappedCallback;
    try {
      if (typeof arguments[0] === "object") {
        notify("This function won't wrap events when using the objectMap syntax. We're delegating to jQuery directly");
      } else {
        callbackIndex = arguments.length - 1;
        while (!(typeof arguments[callbackIndex] === "function" || callbackIndex < 0)) {
          callbackIndex--;
        }
        if (callbackIndex >= 0) {
          wrappedCallback = notify.wrapCallback(arguments[callbackIndex]);
          Array.prototype.splice.call(arguments, callbackIndex, 1, wrappedCallback);
        }
      }
      this.on.apply(this, arguments);
    } catch (_error) {
      error = _error;
      notify(error);
    }
    return this;
  };

}).call(this);
