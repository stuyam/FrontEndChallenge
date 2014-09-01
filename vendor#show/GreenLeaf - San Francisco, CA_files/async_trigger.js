(function() {
  $.fn.async_trigger = function(event) {
    var self;
    self = $(this);
    return setTimeout(function() {
      return self.trigger(event);
    }, 1);
  };

}).call(this);
