function initCounter() {
  var items = document.querySelectorAll('.c-counter');
  if(items.length) {

    items.forEach(function(el, index, arr) {
      var item = {};
      item.$button = $(el).find('button');
      item.count = 0;
      item.newCount = item.count;
      var counter = $(el).parent().find('.screen__counter');

      item.$button.on('click', function(e) {
        e.preventDefault();

        item.count = item.newCount;
        var role = $(this).data('role');

        if(role == 'minus') {
          if(item.count > 0) {
            item.newCount = item.count - 1;
          }
        } else if(role == 'plus') {
          item.newCount = item.count + 1;
        }
        counter.text(addZero(item.newCount));

      })
    });

    function addZero(number) {
      if(number < 10) {
        return '0' + number
      } 
      return number
    }

  }
}
initCounter()
