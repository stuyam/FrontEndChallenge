(function() {
  var notify;

  notify = this.sourcery.notify;

  $.fn.onload = function(callback) {
    var wrappedCallback;
    wrappedCallback = notify.wrapCallback(callback);
    return $(this).ready(wrappedCallback).onevent('page:load', wrappedCallback).onevent('content:load', wrappedCallback);
  };

  $.fn.onPageLoad = function(callback) {
    var wrappedCallback;
    wrappedCallback = notify.wrapCallback(callback);
    return $(this).ready(wrappedCallback).onevent('page:load', wrappedCallback);
  };

}).call(this);
