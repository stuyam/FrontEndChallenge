(function() {
  var resize_splash_hero, resize_splash_image, toggleMobileDesktopViews;

  toggleMobileDesktopViews = function() {
    var width;
    width = window.innerWidth;
    if (width < 680) {
      $('.form-slide .signup-wrapper, .form-slide .signin-wrapper').hide();
      return $('.mobile_options').show();
    } else {
      $('.form-slide .signup-wrapper, .form-slide .signin-wrapper').show();
      return $('.mobile_options').hide();
    }
  };

  $(document).ready(function(e) {
    if ($('#ui-beta-background').length) {
      resize_splash_hero();
      console.info('resizing');
    }
    if ($('.vendor-directory-profile-header').length) {
      resize_splash_image($('.vendor-directory-profile-header'), 1.3);
      return console.info('image present');
    }
  });

  $(window).onload(function(e) {
    if ($('.vendor-directory-profile-header').length) {
      return resize_splash_image($('.vendor-directory-profile-header'), 1.3);
    }
  });

  $(window).resize((function(e) {
    if ($('#ui-beta-background').length) {
      resize_splash_hero();
    }
    if ($('.vendor-directory-profile-header').length) {
      resize_splash_image($('.vendor-directory-profile-header'), 1.3);
      return console.info('image present');
    }
  }));

  resize_splash_hero = function() {
    var $height, $ratio, $width;
    $height = window.innerHeight;
    $width = window.innerWidth;
    $ratio = $width / $height;
    console.info('ratio is ' + $ratio);
    if ($ratio > 1.4) {
      return $('#ui-beta-background').removeClass('vertical');
    } else {
      return $('#ui-beta-background').addClass('vertical');
    }
  };

  resize_splash_image = function(obj, ratio_threshold) {
    var $height, $ratio, $width;
    $height = window.innerHeight;
    $width = window.innerWidth;
    $ratio = $width / $height;
    console.info('ratio is ' + $ratio);
    if ($ratio > ratio_threshold) {
      return obj.removeClass('vertical');
    } else {
      return obj.addClass('vertical');
    }
  };

}).call(this);
