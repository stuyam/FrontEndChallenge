(function() {
  $(document).onload(function(event) {
    $('[data-toggle="buttons-radio"]', event.target).button();
    return $('.toggle', event.target).each(function() {
      var $radio, $toggle;
      $toggle = $(this);
      $radio = $toggle.find('input');
      if ($toggle.find('input.on').is(':checked')) {
        return $toggle.removeClass('toggle-off');
      } else {
        return $toggle.addClass('toggle-off');
      }
    });
  });

  $(document).onevent('click', 'button:has(> a)', function(event) {
    return $(event.target).find('a').click();
  });

  $(document).onevent('click', '.toggle > input', function(event) {
    return $(event.target).change().closest('.toggle').toggleClass('toggle-off');
  });

}).call(this);
