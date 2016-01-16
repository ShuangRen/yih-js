yih = (function (obj) {
  if(!obj) {
    alert('参数错误')
  }
  var domEach = function (Fn) {
    if(obj.dom.length > 1) {
      for(var i=0; i<obj.dom.length; i++) {
        Fn&&Fn(obj.dom[i]);
      }
    }else {
      Fn(obj.dom)
    }
  }


  /**
   * 获取和重写className
   */
  obj.class= function (agm) {
    //如果有参数 则 重写className
    if(agm) {
      domEach(function (v) {
        v.className = agm
      });
      return this
    }else { //,没有参数则获取className
      if(obj.dom.length > 1) {
          return obj.dom[(obj.dom.length - 1)].className;
      }else {
        return obj.dom.className;
      }

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
          domEach(function (v) {

            if(str && !re_cls.test(v.className)) {
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
          domEach(function (v) {
              v.className = v.className.replace(re_cls,'').replace(/(^\s*)|(\s*$)/g,'').replace(/\s{2,}/, ' ');
          });
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
        domEach(function (v) {
            v.style[agm1] = agm2;
        });
          //当参数为对象
      }else if(typeof agm1 == 'object') {
          for(v in agm1) {
            domEach(function (v2) {
                v2.style[v] = agm1[v]
            });
          }
      }else { //当参数为1个的时候 为 获取css
        if(obj.dom.length> 1) {
          var dom_last= obj.dom[(obj.dom.length- 1)];
          getDomOneStyle(dom_last);

        }else {
          getDomOneStyle(obj.dom);

        }
      }
      function getDomOneStyle (dome) {
        if (dome.currentStyle) {
            return dome.currentStyle[agm1];
        }
        else if (window.getComputedStyle) {
            return document.defaultView.getComputedStyle (dome,null)[agm1];
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
       domEach(function(v) {
         v.setAttribute(agm1, agm2);
       });
       //若为对象 则循环设置
     }else if(typeof agm1 == 'object') {
       for(v in agm1) {
         domEach(function(v2) {
            v2.setAttribute(v, agm1[v]);
         });
       }
     }else {
       //当参数为1个则为获取属性
       if(obj.dom.length > 1) {
          return obj.dom[(obj.dom.length - 1)].getAttribute(agm1);
       }else {
         return obj.dom.getAttribute(agm1);
       }
     }
     return this;
   };



  return obj;
})(yih);
