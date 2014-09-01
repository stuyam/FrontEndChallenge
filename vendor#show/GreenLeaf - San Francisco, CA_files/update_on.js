(function() {
  var submit_update, trigger_update_from_field;

  submit_update = function(form) {
    var data;
    data = form.serialize();
    if (form.data('latest_submit') !== data) {
      $.rails.handleRemote(form);
      return form.data('latest_submit', data);
    }
  };

  trigger_update_from_field = function(field) {
    return submit_update($(this).closest('form'));
  };

  $(document).onevent('change', 'form[data-update_on~="change"] :input', trigger_update_from_field);

  $(document).onevent('submit', 'form[data-update_on~="submit"]', function(e) {
    e.preventDefault();
    return submit_update($(this));
  });

  $(document).onload(function(event) {
    return $('form[data-update_on~="change"] :input', event.target).typeWatch({
      callback: trigger_update_from_field
    });
  });

}).call(this);
