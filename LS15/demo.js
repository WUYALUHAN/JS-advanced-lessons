//定义对象的三种形式

//
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(obj.__proto__ === Object.prototype);
//ture
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.__proto__);
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(newObj.__proto__ === obj);
//true
//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);
//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);
//null
Object.prototype.__proto__;
//null
Object.prototype.constructor;
//ƒ Object() { [native code] }
Object.constructor;
//ƒ Function() { [native code] }



//有错
var empty={};
var obj4=Object.create(empty,{
	x:{value:1;},y:{value:2,enumerable:true}
});
console.log(obj4);
console.log(obj4.hasOwnProperty('x'));

//构造函数大写

function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayhi=function(){
	console.log(this.name,this.age);
}
var p2=new Person('jack',20);
p2.sayhi();
// jack 20
p2.__proto__===Person.prototype;
//true
Person.__proto__;
//ƒ () { [native code] }
Person.__proto__===Function.prototype;
//true
Person.__proto__===Object.prototype;
//false
Function.prototype.__proto__===Object.prototype;
//true
p2.__proto__===Object.prototype;
//false
Person.__proto__.__proto__===Object.prototype;
//true
Function.prototype.constructor===Function;
//true
