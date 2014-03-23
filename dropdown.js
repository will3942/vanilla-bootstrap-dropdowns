function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}
document.addEventListener("click", function (e) {
  var level = 0;
  var clicked;
  for (var element = e.target; element; element = element.parentNode) {
    if (hasClass(element, 'dropdown')) {
      iterator = element.childNodes;
      for(var i = 0; i < iterator.length; i++) {
        var elem = iterator[i];
        if (hasClass(elem, 'dropdown-menu')) {
          var isVisible = elem.offsetWidth > 0 || elem.offsetHeight > 0;
          if (!(isVisible)) {
            elem.style.display = "block";
            element.className += " open";
            clicked = element;
          }
        }
      }
    }
    level++;
  }
  var iterator = document.getElementsByClassName('dropdown');
  for (var i = 0; i < iterator.length; i++) {
    var element = iterator[i];
    initerator = element.childNodes;
    for(var x = 0; x < initerator.length; x++) {
      var elem = initerator[x];
      if (hasClass(elem, 'dropdown-menu')) {
        var isVisible = elem.offsetWidth > 0 || elem.offsetHeight > 0;
        if (isVisible && clicked != element) {
          elem.style.display = "none";
          element.className = (element.className).replace(" open","");
        }
      }
    }
  }
});

