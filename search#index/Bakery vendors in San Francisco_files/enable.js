(function() {
  var toggle_enabled_state;

  toggle_enabled_state = function(toggler) {
    var target;
    target = $('#' + $(toggler).data('enable'));
    return target.prop("disabled", !$(toggler).is(':checked'));
  };

  $(document).onevent('change', '[data-enable]', function(e) {
    return toggle_enabled_state(e.target);
  });

  $(document).onload(function(event) {
    return $('[data-enable]', event.target).each(function() {
      return toggle_enabled_state(this);
    });
  });

}).call(this);
