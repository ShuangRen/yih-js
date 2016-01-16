yih = (function (obj) {
  if(!obj) {
    alert('参数错误')
  }
  /**
   * 获取last dom
   */
   obj.last = function () {
     if(obj.dom.length > 1) {
        renturn obj.dom[(obj.dom.length - 1)];
     }else {
       obj.dom;
     }
   };

  /**
   * 获取和重写className
   */
  obj.class= function (agm) {
    //如果有参数 则 重写className
    if(agm) {
      obj.domEach(obj.dom, function (v) {
        v.className = agm
      });
      return this
    }else { //,没有参数则获取className
      return obj.last().className;
    }
  };

  /**
   * 添加className
   */
  obj.addClass = function (str) {
      //正则化className字符串
      var re_cls = new RegExp(str);

      //如果传入了参数 并且 当前className 不存在此className
      if(str) {
          //添加className
          obj.domEach(obj.dom, function (v) {
            if(str && !re_cls.test(obj.class())) {
              v.className = v.className + ' ' + str;
            }
          });
      }
      return this
  };

  /**
   * 移除className
   */
  obj.removeClass = function (str) {
      //正则化className字符串
      var re_cls = new RegExp(str,'g');

      //如果传入了参数 并且 当前className 不存在此className
      if(str) {
          //添加className  并且去掉所有不符合规范的空格
          obj.dom.className = obj.dom.className.replace(re_cls,'').replace(/(^\s*)|(\s*$)/g,'').replace(/\s{2,}/, ' ');
      }
      return this
  };

  /**
   * 判断是否存在某个class
   */
  obj.hasClass = function (str) {
      return new RegExp(str,'g').test(obj.class()) ? true : false;
  };

  /**
   * 大名鼎鼎的css方法
   */
  obj.css = function (agm1,agm2) {
    //有第二个参数则必定是设置css
      if(agm2) {
          obj.dom.style[agm1] = agm2;
          //当参数为对象
      }else if(typeof agm1 == 'object') {
          for(v in agm1) {
              obj.dom.style[v] = agm1[v]
          }
      }else { //当参数为1个的时候 为 获取css
          if (obj.currentStyle) {
              return obj.dom.currentStyle[agm1];
          }
          else if (window.getComputedStyle) {
              // propprop = agm1.replace (/([A-Z])/g, "-$1");
              // propprop = agm1.toLowerCase ();
              return document.defaultView.getComputedStyle (obj.dom,null)[agm1];
          }
      }

      return this;
  };

  /**
   * 自定义属性获取和重写添加等 attr
   */
   obj.attr = function (agm1,agm2) {
     //第二个参数存在则为设定属性值
     if(agm2) {
       obj.dom.setAttribute(agm1, agm2);
       //若为对象 则循环设置
     }else if(typeof agm1 == 'object') {
       for(v in agm1) {
           obj.dom.setAttribute(v, agm1[v]);
       }
     }else {
       //当参数为1个则为获取属性
       return obj.dom.getAttribute(agm1);
     }
     return this;
   }



  return obj;
})(yih);
