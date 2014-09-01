(function() {
  $(document).onevent('click', 'a[data-behavior="show_more"]', function(e) {
    var link, target;
    e.preventDefault();
    link = $(e.target);
    target = link.closest('.show_more');
    return target.toggleClass('more_shown');
  });

}).call(this);
