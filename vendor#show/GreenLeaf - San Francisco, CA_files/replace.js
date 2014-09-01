(function() {
  var cache, replace, replaceOrderGuideProductResults, replaceProductResults, replaceSuggestedProductResults;

  cache = this.sourcery.cache;

  replace = function(form, source_url) {
    var sourcing_from_form, target, target_selector;
    if (!source_url) {
      sourcing_from_form = true;
      source_url = form_url(form);
    }
    target_selector = form.data('replace');
    target = $(target_selector);
    target.addClass('loading');
    return cache.getCachedOrRequest(source_url, function(update, cached) {
      if (!sourcing_from_form || source_url === form_url(form)) {
        replaceProductResults(form, update, target, target_selector, source_url);
      }
      return target.removeClass('loading');
    });
  };

  search_events('[data-replace]', replace);

  $(document).onevent('click', "[data-replace] > .pagination a[href]", function(e) {
    var link;
    link = $(e.target);
    if (link.attr('href')[0] !== '#') {
      e.preventDefault();
      return replace(link.closest('[data-replace]'), link.attr('href'));
    }
  });

  replaceProductResults = function(form, update, target, target_selector, source_url) {
    if (form.attr('id') === "suggested-products") {
      return replaceSuggestedProductResults(update);
    } else {
      return replaceOrderGuideProductResults(form, update, target, target_selector, source_url);
    }
  };

  replaceOrderGuideProductResults = function(form, update, target, target_selector, source_url) {
    var response, result, state_url;
    response = $($.trim(update));
    if (form.data('partial')) {
      target.replaceWith(response);
      target = response;
      state_url = current_url();
    } else {
      result = response.filter(target_selector);
      if (!result.length) {
        result = response.find(target_selector);
      }
      target.replaceWith(result);
      target = result;
      state_url = form.attr('action');
    }
    target.async_trigger('content:load');
    return pushPartialUpdateState(source_url, {
      base_url: state_url,
      title: response.find('head title').text()
    });
  };

  replaceSuggestedProductResults = function(update) {
    var data, html, productRowTemplate, rowData, tableBody;
    data = JSON.parse(update);
    html = $('<div></div>');
    html.append(data.header);
    tableBody = html.find('tbody');
    productRowTemplate = Ember.TEMPLATES["apps/ordering/product_row.raw"];
    rowData = {
      authenticityToken: $("meta[name='csrf-token']").attr('content')
    };
    $.each(data.products, function(index, product) {
      rowData.product = product;
      return tableBody.append(productRowTemplate(rowData));
    });
    return $('#suggested_products').html(html);
  };

}).call(this);
