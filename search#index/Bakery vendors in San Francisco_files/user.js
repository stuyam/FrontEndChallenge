(function() {
  var currentBuyer, currentUser, currentVendor, _base, _base1;

  currentUser = function() {
    return $('#current_user').data() || {};
  };

  currentBuyer = function() {
    return $('#current_buyer').data() || {};
  };

  currentVendor = function() {
    return $('#current_vendor').data() || {};
  };

  this.sourcery || (this.sourcery = {});

  (_base = this.sourcery).userPreferences || (_base.userPreferences = {});

  $.extend((_base1 = this.sourcery).user || (_base1.user = {}), {
    currentUser: currentUser,
    currentBuyer: currentBuyer,
    currentVendor: currentVendor
  });

}).call(this);
