//测试2 DOM0级事件处理
/*
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//是覆盖
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
*/


//测试3 DOM2级事件处理

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//思考：是覆盖

    div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
    div2.dispatchEvent(new Event("MyEvent"));

    //思考DOM节点对象的继承关系
    
    //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在哪个原型上的？
    // console.log(div2.__proto__);
    // console.log(div2.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__);
    // console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);
    
}
