(function() {
  var notify, user;

  user = this.sourcery.user;

  notify = this.sourcery.notify;

  $(document).onPageLoad(function() {
    return Honeybadger.setContext({
      user_id: user.currentUser().id,
      buyer_id: user.currentBuyer().id,
      vendor_id: user.currentVendor().id
    });
  });

}).call(this);
