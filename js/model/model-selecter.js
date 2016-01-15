var _selecter = (function () {
  var a = {
    "arr" : [],
    "all" : '',
    "resetAll" : function () {
      this.all = document.getElementsByTagName('*');
    },

    "init" : function (dom) {
      switch(dom.charAt(0)) {
        case '#':
          return this.idSelect(dom.substring(1));
          break;
        case '.':

          return this.classSelect(dom.substring(1));
          break;
        default :

          return this.domSelect(dom.substring(0));
          break;
      }
    },

    "idSelect" : function (id) {
        return document.getElementById(id);
    },

    "classSelect" : function (cls) {
        this.all == '' ? document.getElementsByTagName('*') : this.all;
        this.arr = [];
        for(var i=0; i<this.all.length;i++) {
          if(this.all[i].className = cls) {
            this.arr.push(this.all[i]);
          }
        }

        return this.arr;

    },

    "domSelect" : function (tagName) {
      alert(22)
      return document.getElementsByTagName(tagName);
    }
  };

  return a;
})();
