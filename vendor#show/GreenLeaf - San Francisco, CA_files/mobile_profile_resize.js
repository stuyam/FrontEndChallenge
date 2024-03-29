(function() {
  var swap_columns_form_page, swap_columns_vendor_page;

  $(document).ready(function() {
    runColumnUpdate();
    $('#open-search').click(function(){
      $('#search-group').toggle();
    });
  });

  $(window).onload(function() {
    runColumnUpdate();
  });

  $(window).resize((function() {
    runColumnUpdate();
  }));

  function runColumnUpdate(){
    if ($('#vendor_profile').length) {
      swap_columns_vendor_page();
      return;
    }
    if ($('#form-page').length) {
      swap_columns_form_page();
      return;
    }
  }

  swap_columns_vendor_page = function() {
    var $width;
    $width = window.innerWidth;
    if ($width < 760) {
      $('.right-column').insertBefore('.vendor-directory-left.pull-left');
      $('#search-group form').css('display', 'block');
      $('#search-group').addClass('search-group-mobile');
      $('#search-group').hide();
      $('#open-search').show();
    } else {
      $('.vendor-directory-left.pull-left').insertBefore('.right-column');
      $('#search-group').removeClass('search-group-mobile');
      $('#search-group').show();
      $('#open-search').hide();
    }
  };

  swap_columns_form_page = function() {
    var $width;
    $width = window.innerWidth;
    if ($width < 660) {
      $('.right-column').insertBefore('.left-column');
    } else {
      $('.left-column').insertBefore('.right-column');
    }
  };

}).call(this);
