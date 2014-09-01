(function() {
  var addOrderGuideProductRow, incrementCounter, orders, sendOrderUpdate, updateCartCount, updateLocalCache, updateOrderGuideCount, _base;

  updateLocalCache = function(row) {
    return orders.getCurrentLineItems(function(lineItems) {
      var lineItem, newProduct, order, productId, productIds;
      productId = row.data('product_id');
      lineItems[productId] || (lineItems[productId] = {});
      lineItem = {
        quantity: row.find('input.quantity').val(),
        note: row.find('input.note').val()
      };
      $.extend(lineItems[productId], lineItem);
      order = $('[data-for_order]');
      productIds = order.data('product_ids') || [];
      newProduct = $.inArray(productId, productIds) === -1;
      if (lineItem.quantity > 0 && newProduct) {
        productIds.push(productId);
        order.data('product_ids', productIds);
        return orders.updateCartCount(1);
      } else if (lineItem.quantity <= 0 && !newProduct) {
        productIds = $.grep(productIds, function(id) {
          return id !== productId;
        });
        order.data('product_ids', productIds);
        return orders.updateCartCount(-1);
      }
    });
  };

  sendOrderUpdate = function(field) {
    var form, orderId;
    form = field.closest('form');
    orderId = form.closest('[data-for_order]').data('for_order');
    if (orderId) {
      form.find('[name=order_id]').val(orderId);
    } else {
      form.find('[name=order_id]').attr('disabled', true);
    }
    $.rails.handleRemote(form);
    return updateLocalCache(field.closest('.product-row'));
  };

  updateCartCount = function(count) {
    incrementCounter('.ui-cart-button > .contents_count', count);
    return $(document).trigger('line_items:count:changed');
  };

  updateOrderGuideCount = function(count) {
    if (Ember) {
      return;
    }
    return incrementCounter('#main-orderguide thead .contents_count', count);
  };

  addOrderGuideProductRow = function(orderGuideProductId) {
    Ordering.LegacyBridge.refreshProductData().then(function() {
      return Ordering.LegacyBridge.refreshListData().then(function() {
        return Ordering.LegacyBridge.refreshVendorData();
      });
    });
    if (Ember) {
      return;
    }
    return $.get("/order_guide/order_guide_products/" + orderGuideProductId + "/row", function(response) {
      var current_scroll, new_row, table;
      $('#main-orderguide').show();
      $('#empty_order_guide_message').hide();
      table = $('#main-orderguide > tbody');
      current_scroll = $(document).scrollTop();
      table.append(response);
      new_row = table.children('.orderguide-row').last();
      $(document).scrollTop(current_scroll + new_row.height() + 1);
      table.trigger('content:load');
      return updateOrderGuideCount(1);
    });
  };

  incrementCounter = function(selector, change) {
    var counter, quantity;
    counter = $(selector);
    quantity = parseInt(counter.text(), 10) + change;
    return counter.text(quantity);
  };

  this.sourcery || (this.sourcery = {});

  orders = $.extend((_base = this.sourcery).orders || (_base.orders = {}), {
    sendOrderUpdate: sendOrderUpdate,
    updateLocalCache: updateLocalCache,
    updateCartCount: updateCartCount,
    updateOrderGuideCount: updateOrderGuideCount,
    addOrderGuideProductRow: addOrderGuideProductRow
  });

}).call(this);
