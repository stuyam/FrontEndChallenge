(function() {
  this.search_events = function(selector, callback) {
    var form, input, most_recent_search;
    form = "form" + selector;
    input = "" + form + " :input";
    $(document).onload(function(event) {
      return $(input, event.target).typeWatch({
        wait: 350,
        captureLength: 2,
        callback: function(value) {
          return $(this).change();
        }
      });
    });
    most_recent_search = null;
    $(document).onevent('change', input, function(e) {
      var args, form_tag;
      form_tag = $(e.target).closest(form);
      args = form_tag.serialize();
      if (most_recent_search !== args) {
        callback(form_tag);
        return most_recent_search = args;
      }
    });
    return $(document).onevent('submit', form, function(e) {
      e.preventDefault();
      $(':focus').blur();
      return callback($(e.target));
    });
  };

}).call(this);
