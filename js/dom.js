yih = (function (obj) {
    if(!yih) {
        alert('参数错误')
    }
    /**
     * 获取和重写className
     */
    obj.class= function (agm) {
        //如果有参数 则 重写className
        if(agm) {
            obj.dom.className = agm
            return this
        }else { //,没有参数则获取className
            return obj.dom.className;
        }
    };

    /**
     * 添加className
     */
    obj.addClass = function (str) {
        //正则化className字符串
        var re_cls = new RegExp(str);

        //如果传入了参数 并且 当前className 不存在此className
        if(str && !re_cls.test(obj.class())) {
            //添加className
            obj.dom.className = obj.dom.className + ' ' + str;
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
    }

    /**
     * 大名鼎鼎的css方法
     */
    obj.css = function (agm1,agm2) {
        if(agm2) {
            obj.dom.style[agm1] = agm2;
        }else if(typeof agm1 == 'object') {
            for(v in agm1) {
                obj.dom.style[v] = agm1[v]
            }
        }else {
            if (obj.currentStyle) {
                return obj.dom.currentStyle[agm1];
            }
            else if (window.getComputedStyle) {
                propprop = agm1.replace (/([A-Z])/g, "-$1");
                propprop = agm1.toLowerCase ();
                return document.defaultView.getComputedStyle (obj.dom,null)[agm1];
            }
        }

        return this;
    }
    return obj;
})(yih);
