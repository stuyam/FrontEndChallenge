(function() {
  $('a[data-toggle="tab"]').onevent('shown', function(e) {
    return pushIdState($(e.target).attr('href'));
  });

  $(document).onevent('inview', 'ul.nav-tabs.hash_tabs:has(> li > a[data-toggle="tab"])', function(e) {
    var tab, target;
    target = $(e.target);
    if (window.location.hash) {
      tab = target.find("> li > a[data-toggle='tab'][href='" + window.location.hash + "']");
      if (tab.length) {
        tab.tab('show');
      }
    }
    return target.removeClass('hash_tabs');
  });

}).call(this);
