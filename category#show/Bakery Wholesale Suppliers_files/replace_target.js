(function() {
  $(document).onevent('ajax:success', '[data-replace_target]', function(event, data) {
    var target;
    target = $(event.target);
    return $("#" + (target.data('replace_target'))).replaceWith(data).trigger('content:load');
  });

}).call(this);
