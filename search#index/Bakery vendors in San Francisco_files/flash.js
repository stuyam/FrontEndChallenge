(function() {
  var defaultErrorMessage, errorMessages, excludedErrors, notify,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  notify = this.sourcery.notify;

  window.flash = function(type, lead, message) {
    var flash_icon_class;
    flash_icon_class = {
      info: 'icon-info-sign',
      error: 'icon-warning-sign',
      success: 'icon-ok'
    };
    return '<div class="alert alert-' + type + '">' + '<a class="close" data-dismiss="alert" href="#">×</a>' + '<i class="' + flash_icon_class[type] + '"></i> ' + '<strong>' + lead + '</strong> ' + message + '</div>';
  };

  excludedErrors = ['abort', ''];

  errorMessages = {
    connectivity: "Seems like the Internet is down. Please check your connection and try again.",
    timeout: 'Looks like that action took too long. Please try again.'
  };

  defaultErrorMessage = 'We had an error. Please refresh the page and try again.';

  $(document).ajaxError(notify.wrapCallback(function(event, jqXHR, ajaxSettings, thrownError) {
    var messageKey;
    $('.alert-error').remove();
    messageKey = ajaxSettings.type === "HEAD" ? 'connectivity' : thrownError;
    if (jqXHR.status === 404 || __indexOf.call(excludedErrors, thrownError) < 0) {
      return $('#body').prepend(window.flash('error', 'Oops!', errorMessages[messageKey] || defaultErrorMessage));
    }
  }));

}).call(this);
