  function keyPressHandler(evt) {
    var url = '';
    if (evt.keyCode == 13 || evt.keyCode == 39) {
      var next = document.getElementById('next');
      if (next) {
        var url = next.getAttribute('href');
      };
    } else if (evt.keyCode == 8 || evt.keyCode == 37) {
      var prev = document.getElementById('prev');
      if (prev) {
        url = prev.getAttribute('href');
      };
    };
    if (url) {
      document.location = url;
    };
  };

  if (document.addEventListener) {
    document.addEventListener('keypress', keyPressHandler, false);
  } else {
    document.attachEvent('onkeypress', keyPressHandler);
  };