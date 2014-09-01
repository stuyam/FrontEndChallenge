(function() {
  $(document).onevent('click', 'a[data-click], :button[data-click]', function(event) {
    var clickId;
    event.preventDefault();
    clickId = $(event.target).closest('[data-click]').data('click');
    return $('#' + clickId).click();
  });

}).call(this);
