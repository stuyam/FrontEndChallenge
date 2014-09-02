(function() {
  var swap_columns_form_page, swap_columns_vendor_page;

  $(document).ready(function() {
    runColumnUpdate();

    //click the search to open light box
    $('#open-search').click(function(){
      $('#light-box-search-bg').show();
      $('#search-group').show();
    });

    //click the "x" to close the light box
    $('#light-box-search-bg span').click(function(){
      $('#light-box-search-bg').hide();
      $('#search-group').hide();
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
      $('#search-group').addClass('search-group-mobile');
      $('#search-group').hide();
      $('#open-search').show();
      $('#light-box-search-bg').hide();
    } else {
      $('.vendor-directory-left.pull-left').insertBefore('.right-column');
      $('#search-group').removeClass('search-group-mobile');
      $('#search-group').show();
      $('#open-search').hide();
      $('#light-box-search-bg').hide();
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
