(function() {
  this.sourcery || (this.sourcery = {});

  this.sourcery.typeaheadDatasets = {};

  $(document).onload(function(event) {
    return $('[data-typeahead]', event.target).each(function() {
      var data, self;
      self = $(this);
      data = $.map(self.data('typeahead').split(' '), function(dataset) {
        return sourcery.typeaheadDatasets[dataset];
      });
      return self.typeahead(data);
    });
  });

  $(document).onevent('typeahead:selected', 'form.act-submit_on_select [data-typeahead]', function(event) {
    return $(event.target).closest('form').submit();
  });

  $.extend(this.sourcery.typeaheadDatasets, {
    vendors: {
      name: 'vendors',
      prefetch: '/distributors.json',
      remote: '/vendors.json?term=%QUERY'
    }
  });

}).call(this);
