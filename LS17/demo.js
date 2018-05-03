//通过Object.create静态方法创建的对象的原型共享问题
var superObj={
	x:1,
	y:2
};
var supObj_first=Object.create(superObj);
var supObj_second=Object.create(superObj);
supObj_first.__proto__.x=5;
console.log(supObj_second.x);
// 5

var superObj={
	x:3,
	y:4,
	show:function(){
		console.log(this.x,this.y);
	}
}
var supobj=Object.create(superObj);
console.log(supobj.show());
// 3 4

//JS实现继承的形式
function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.showName=function(){
	console.log(this.name);
}
function Student(name,age,id){
	Person.call(this,name,age);//等价于 this.name=name;this.age=age;
	this.id=id;
}
Student.prototype.__proto__=Person.prototype;//注释掉会出错，这句是将Person.prototype里的showName方法赋给student
Student.prototype.constructor=Student;//第二句话是回指student
var s1=new Student('xxx',22,201701);
var s2=new Student('ww',21,201702);
console.log(s1.showName(),s2.showName());
// xxx
// ww

Object.keys({x:1,y:2});
//(2) ["x", "y"]