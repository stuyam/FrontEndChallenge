(function() {
  var clearInput, searchInput, updateClearInput;

  searchInput = 'input[type="search"]';

  clearInput = 'a.clear_search_input';

  updateClearInput = function() {
    var input;
    input = $(this);
    if (input.val().length > 0) {
      return input.next(clearInput).show();
    } else {
      return input.next(clearInput).hide();
    }
  };

  $(document).onload(function(event) {
    return $(searchInput, event.target).each(updateClearInput);
  });

  $(document).onevent('change keyup', searchInput, updateClearInput);

  $(document).onevent('focus', searchInput, function() {
    var $this;
    $this = $(this);
    $this.select();
    return $this.mouseup(function() {
      $this.unbind('mouseup');
      return false;
    });
  });

  $(document).onevent('click', clearInput, function(event) {
    var input;
    event.preventDefault();
    event.stopPropagation();
    input = $(this).hide().prev(searchInput);
    return input.val('').change().focus();
  });

}).call(this);
