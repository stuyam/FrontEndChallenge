(function() {
  var cache, cached_requests, most_recent_request;

  cache = {};

  most_recent_request = null;

  cached_requests = {};

  cache.invalidate = function(url_part, params) {
    var exp, prop, second_part, _i, _len, _ref, _results;
    if (!params) {
      return delete cached_requests[url_part];
    } else {
      exp = new RegExp("^" + url_part);
      _ref = Object.getOwnPropertyNames(cached_requests);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        prop = _ref[_i];
        if (!(exp.test(prop))) {
          continue;
        }
        second_part = prop.substring(url_part.length);
        if (second_part.match(new RegExp($.param(params)))) {
          _results.push(delete cached_requests[prop]);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };

  cache.invalidateAll = function() {
    return cached_requests = {};
  };

  cache.getCachedOrRequest = function(url, onData, format) {
    var cached_response;
    if (format == null) {
      format = "html";
    }
    if (cached_response = cached_requests[url] && cached_requests[url][format]) {
      return onData(cached_response, true);
    } else {
      most_recent_request = url;
      return $.get(url, function(response) {
        if (most_recent_request === url) {
          onData(response);
        }
        cached_requests[url] || (cached_requests[url] = {});
        return cached_requests[url][format] = response;
      }, format);
    }
  };

  this.sourcery || (this.sourcery = {});

  this.sourcery.cache = cache;

}).call(this);
