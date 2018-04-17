//JS对象的相关操作
//创建对象 三种方法
//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());


//原型
var arr=[1,2,3];
undefined
arr.__proto__;
//[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, shift: ƒ, …]
arr.__proto__===Array.prototype;
//true
{}.__proto===Object.prototype//会报错，认为{}是代码块，加上()会好
({}).__proto__===Object.prototype;
//true
({}).__proto__.__proto__
//null

//通过Object工场方法创建JS对象,
//注：JS对象是通过原型链的方式实现的对象继承
var o={
	x:12
};
o.__proto__===Object.prototype;
//true
var o2=Object.create(o);
//undefined
o2.__proto__===o;
true
console.log(o2);
//{}__proto__: Object

//构造函数的方式创建JS对象 
// 注：JS对象是通过原型链的方式实现的对象继承
var Person=function(name){
	this.name=name;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name);
};
var p=new Person('ja');
p.sayName();

p.__proto__===Person.prototype;
//true
Person.__proto__===Function.prototype;
//true
Person.__proto__.__proto__===Object.prototype;
//true
Person.__proto__.__proto__.__proto__===null;
//true

//注意：
var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true

var obj={
	x1:1,
	x2:3,
	x3:4
};
for(var i=1;i<4;i++){
	console.log(obj[('x'+i)]);
}
//1
//3
//4

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}//只是相当于设置了obj3的i的值是9
console.log(obj3);//{i: 9}
var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}//访问和设置变量用[]
console.log(obj4);// {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}