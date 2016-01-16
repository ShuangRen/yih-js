var yih = (function () {

  //获取dom节点
  var getDom = function (selecter) {
    //调用 select选择器模块的处理
    this.dom =  _selecter.init(selecter);
    return this;
  }

  var domEach = function (dom, Fn) {
    if(dom.length > 1) {
      for(var i=0; i<dom.length; i++) {
        Fn&&Fn(dom[i]);
      }
    }else {
      Fn(dom)
    }
  }

  //返回对应参数
  return {
    "version":1,
    "getDom":getDom,
    "domEach":domEach
  }
})()

//将对象的getDom 方法 挂载到 $
var $ = function (str) {
  return yih.getDom(str);
}
