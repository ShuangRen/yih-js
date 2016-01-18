var _dom = (function () {
  var a = {
    "class" : function (dom) {
      if(arguments.length > 1) {
        arguments[0].className = arguments[1];
      }
      return arguments.className;
    }
  };
  return a;
})();
