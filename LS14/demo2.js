// 属性特性描述符是一个对象，用来查看对象属性的特性
// - 该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得

var obj={x:1};
Object.defineProperty(obj,'y',{value:2,writable:false});
var xdes=Object.getOwnPropertyDescriptor(obj,'x');
var ydes=Object.getOwnPropertyDescriptor(obj,'y');
console.log(xdes,ydes);
//{value: 1, writable: true, enumerable: true, configurable: true}
// {value: 2, writable: false, enumerable: false, configurable: false}
console.log(obj);
//{x: 1, y: 2}x: 1y: 2__proto__: Object

for(var k in obj){
	console.log(k,obj[k]);
}
// x 1
console.log(obj.toString());
//[object Object]s

//属性特性的继承特点
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//思考configurable和writable是true还是false
o1.x = 34;
console.log(o1.x);//12,true 的时候是34

var o2 = Object.create(o1);
o2.x = 56;
console.log(o2.x);//12,true 的时候是56

//访问器属性特性的继承特点
var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;
console.log(o3.x);//输出21，只有get,只能读不能写入

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;
console.log(o4.x);//输出57，可读可写

//全局变量
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;
// {value: 23, writable: true, enumerable: true, configurable: false}
//false