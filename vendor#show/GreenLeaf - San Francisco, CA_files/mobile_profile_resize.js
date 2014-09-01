(function() {
  var swap_columns_form_page, swap_columns_vendor_page;

  $(document).ready(function() {
    runColumnUpdate();
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
    }
    if ($('#form-page').length) {
      swap_columns_form_page();
    }
  }

  swap_columns_vendor_page = function() {
    var $width;
    $width = window.innerWidth;
    if ($width < 760) {
      $('.right-column').insertBefore('.vendor-directory-left.pull-left');
      $('#search-group form').css('display', 'block');
      // $('#search-group').css('z-index', '1000000000');
      // $('#search-group').css('height', '100px');
      // $('#search-group').css('width', '300px');
    } else {
      $('.vendor-directory-left.pull-left').insertBefore('.right-column');
      //$('#search-group').css('margin-top', '0px');
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
