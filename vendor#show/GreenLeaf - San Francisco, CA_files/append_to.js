(function() {
  $(document).onevent('ajax:success', '[data-append_to]', function(event, data) {
    var target;
    target = $(event.target);
    return $("#" + (target.data('append_to'))).append(data);
  });

}).call(this);
