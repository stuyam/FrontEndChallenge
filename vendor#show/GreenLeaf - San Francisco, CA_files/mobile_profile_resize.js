(function() {
  var swap_columns_form_page, swap_columns_vendor_page;

  $(document).ready(function() {
    runColumnCheck();
  });

  $(window).onload(function() {
    runColumnCheck();
  });

  $(window).resize((function() {
    runColumnCheck();
  }));

  function runColumnCheck(){
    if ($('#vendor_profile').length) {
      swap_columns_vendor_page();
    }
    if ($('#form-page').length) {
      return swap_columns_form_page();
    }
  }

  swap_columns_vendor_page = function() {
    var $width;
    $width = window.innerWidth;
    if ($width < 760) {
      return $('.right-column').insertBefore('.vendor-directory-left.pull-left');
    } else {
      return $('.vendor-directory-left.pull-left').insertBefore('.right-column');
    }
  };

  swap_columns_form_page = function() {
    var $width;
    $width = window.innerWidth;
    if ($width < 660) {
      return $('.right-column').insertBefore('.left-column');
    } else {
      return $('.left-column').insertBefore('.right-column');
    }
  };

}).call(this);
