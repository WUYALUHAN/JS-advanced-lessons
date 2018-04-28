//this

//作用域传递
var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b);
	}
	f2();
}
f1();
//1  2
//而this不进行作用域传递

//一般函数中的this
//严格模式 和 非严格模式
function thisTest(){
	console.log(this===window);
}
thisTest();
//true
'use strict'
function thisTest(){
	console.log(this===window);
	console.log(this);
}
thisTest();
//false
//undefined

//this在函数内添加、删除、修改全局对象属性
var a=5,b=3;
function thisTest(){
	this.a=20;
	delete this.b;
	this.c='新添加的全局变量';
	console.log(a,c);
}
thisTest();
// 20 "新添加的全局变量"

//对象方法中this
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x=x;
		this.y=y;
	}
}
point.moveTo(1,1);
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}

//构造函数this指代通过new新创建的对象
function Person(name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){
		console.log(this.name,this.age);
	}	
}
var p1=new Person('Mike',20);
var p2=new Person('Lucy',23);
p1.showMe();
p2.showMe();
// Mike 20
//Lucy 23

//私有属性 闭包  ???
var  Person =function(name,age){
	namePrivate=name;
	agePrivate=age;
	showMe=function(){
		console.log(namenamePrivate,agePrivate);
	}	
}
var p1=new Person('Mike',20);
var p2=new Person('Lucy',23);
showMe();
//p2.showMe();

//间接调用this(call,apply)
objA={name:'aa',x:1};
objB={name:'bb',x:2};
function Test(){
	console.log(this.name,this.x);
}
objA.fun=Test;
objA.fun();
objA.fun.call(objB);//call吸星大法
// aa 1
// bb 2
//回顾 call是在Function.protoperty上的方法
function f1(){}
f1.hasOwnProperty('call');
//false
f1.__proto__.hasOwnProperty('call');
//true