//函数对象的属性
function foo(x,y,z){}
console.log(foo.length);//形参的长度 3

var foo = function (a,b){
console.log(arguments);//类似数组的一个对象
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
 console.log(foo.arguments.length);
    // console.log(arguments.length);//4
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);// (4) [1, 2, 3, 4]
};
foo(1,2,3,4);

//函数对象属性之caller 获取调用当前函数的函数。例一
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
function foo(){
	if(foo.caller==null)
		console.log("foo没有调用函数");
	else{
		console.log("foo is called from the function:");
		console.log(foo.caller.toString());
	}
}
foo();//foo没有调用函数
function fee(){
	foo();
}
fee();//foo is called from the function:
//function fee(){
	foo();
}
//函数对象属性之callee 返回正被执行的 Function 对象，即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员，该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
if (n <= 0)
return 1;
else
return n * func(n - 1);
//return n * arguments.callee(n - 1);
};
console.log(func(4));
//优点，可以是匿名函数
(function(n){
if (n <= 0)
return 1;
else
return n * arguments.callee(n - 1);
}(4));

//函数对象属性之 constructor 获取创建某个对象的构造函数。可以用来判断对象是哪一类
function MyString(){
	 this.name="abc";
}
var x=new MyString();
if(x.constructor==MyString){
	console.log("Object constructor is MyString")
}
//Object constructor is MyString

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
var o={};//定义一个对象
o.__proto__===Object.prototype;//true对象的原型
Object.__proto__===Function.prototype;//true
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";//在原型上添加属性
Man.prototype.sayHi = function () {//在原型上添加方法
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);//实例化一个对象 li ，this指向li
li.sayHi();//在原型上访问方法和属性  Hi,i'm Leo
console.log(li.sex);//M
Man.prototype.isStrong = true;
console.log(li.isStrong);//true