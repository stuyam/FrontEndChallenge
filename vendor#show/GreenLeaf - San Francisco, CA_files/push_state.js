(function() {
  var push_state_supported;

  push_state_supported = function() {
    return window.history && window.history.pushState;
  };

  this.push_state = function(url, title) {
    if (push_state_supported()) {
      return window.history.pushState({}, title, url);
    }
  };

  this.pushPartialUpdateState = function(source_url, options) {
    var new_url, new_url_params;
    if (options == null) {
      options = {};
    }
    if (push_state_supported()) {
      new_url = options.base_url || current_url();
      new_url_params = source_url.split('?')[1];
      if (new_url_params) {
        new_url += '?' + new_url_params;
      }
      return push_state(new_url, options.title);
    }
  };

  this.pushIdState = function(id, options) {
    var new_url;
    if (options == null) {
      options = {};
    }
    if (push_state_supported()) {
      if (id[0] === '#') {
        new_url = current_url() + id;
      } else {
        new_url = current_url() + '#' + id;
      }
      return push_state(new_url, options.title);
    }
  };

}).call(this);
