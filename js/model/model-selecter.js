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
        this.all  =  document.getElementsByTagName('*');
        this.arr = [];
        for(var i=0; i<this.all.length;i++) {
          if(new RegExp(cls, 'g').test(this.all[i].className)) {
            this.arr.push(this.all[i]);
          }
        }
        if(this.arr.length > 1) {
            return this.arr;
        }

        return this.arr[0];

    },

    "domSelect" : function (tagName) {
      return document.getElementsByTagName(tagName);
    }
  };

  return a;
})();
