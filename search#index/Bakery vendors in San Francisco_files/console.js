(function() {
  if (!this.console) {
    this.console = {
      info: function() {},
      debug: function() {},
      warn: function() {},
      log: function() {},
      error: function() {},
      profile: function() {},
      profileEnd: function() {},
      time: function() {},
      timeEnd: function() {},
      trace: function() {},
      dir: function() {},
      exception: function() {},
      group: function() {},
      groupCollapsed: function() {},
      groupEnd: function() {}
    };
  }

}).call(this);
