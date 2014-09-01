(function() {
  this.current_url = function() {
    return window.location.protocol + '//' + window.location.host + window.location.pathname;
  };

  this.form_url = function(form) {
    var fieldsToDisable, url;
    fieldsToDisable = form.find(':input:not(:disabled)').filter(function() {
      return !$(this).val();
    });
    fieldsToDisable.attr('disabled', true);
    url = form.attr('action') + '?' + form.serialize();
    fieldsToDisable.attr('disabled', false);
    return url;
  };

}).call(this);
