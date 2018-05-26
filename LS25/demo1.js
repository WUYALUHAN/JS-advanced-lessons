window.onload = function (e) {
    console.log("window onload");
    console.log("e:", e);
    console.log(e.target);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // 0
        // console.log(e.type);
        // console.log(e.target);//target和this此时不是很一样
        //console.log(e.this);

        // 1
        // console.log(e.clientX,e.clientY);
        // console.log(this, "-----", e.target.id);

        // 测试2
        //事件冒泡 一层一层的找原型
        // console.log(e);
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);

        // 测试3
        //emmmmm 不是很懂
        for(var k in e){
            console.log(k,e[k]);
        }
        for(var k in e.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__.__proto__){
            console.log(k);
        }
    }
    div1.onclick = eventHandler;
    div2.onclick = eventHandler;

    //自定义事件监听、事件分发
    // document.addEventListener("xx",function(){console.log("11")});
    // document.dispatchEvent(new Event("xx"));
}
