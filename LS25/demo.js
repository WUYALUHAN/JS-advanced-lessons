window.onload = function() {
    console.log("window onload");
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    div2.onclick = function() {
            console.log("div2 click");
        }
        // div2.onmouseover = function () {
        //     console.log("div2 mouseover");
        // }
        //事件响应
    div1.onclick = function() { console.log('div1'); }
}
// div2.onmouseover = function () {
        //     console.log("div2 mouseover");
        // }
        //事件不响应
function div1click() {
    console.log("div1click");
}