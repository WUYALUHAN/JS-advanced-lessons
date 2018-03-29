//call调用一个普通函数或对象的方法时，用另一个对象替换当前对象
// 与apply方法不同的地方是，apply的第二个参数类型必须是Array
var obj1={
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2={
	x:34
}
obj1.foo.call(obj2,'xx');// 34 "xx"

var obj1={
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2={
	x:34
}
var fee=obj1.foo.bind(obj2,'xx');
fee();//34 "xx"

//bind绑定方法
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){ 		
			console.log(this.x);
			}
		foo.bind(this)();//将函数 foo绑定到 obj 上 返回 23，
		//foo();//返回 45
	}
};
obj.test();//23

var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){ 		
			console.log(this.x);
			}
		var fee=foo.bind(this);
		fee();//将函数 foo绑定到 obj (即this指向obj)上 返回 23，
		foo();//this指向全局 返回 45
	}
};
obj.test();

//高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(x){return x+1;});//(2+1)+(3+1) 7
add(2,-3,Math.abs);//绝对值相加 5
add(2,3,Math.sqrt);//2的开平方加3的开平方 3.1462643699419726

//2*(x-1)-3*y*y
//2*a*a-3(b-1)
//2*(i+1)-3*(j-1)
//主调函数foo嵌套函数f1,f2,f3 随公式不同调不同的子函数
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);
foo(1,2,f3,f2);
foo(1,4,f1,f2);

// 3月29
// 复习下
var x=12;
var obj = {
    x:23,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出 返回函数对象fun1();ƒ fun2() {
    //     return this.x;//若改为 return this;
    // }
console.log(obj.fun3()());//输出 12 调用fun2(),在window下指向全局
console.log(obj.fun4());//输出 23 将fun1()中的返回即fun2()赋给fun4,是obj的一个方法。

var x=12;
var obj = {
    x:23,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
	console.log("this-1",this);
    return function fun2() {
        console.log("this-2",this);
		return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;//将fun1的函数主体赋给fun3
obj.fun4 = fun1();//fun1()调用的结果给fun4
console.log(obj.fun3());//输出什么 返回函数对象
console.log(obj.fun3()());//输出什么 fun3() 调用fun1() 返回 function fun2(),再次调用返回window下的this
console.log(obj.fun4());//输出什么 23
//this-1 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// this-1 {x: 23, fun2: ƒ, fun3: ƒ, fun4: ƒ}  //？？？？？
// ƒ fun2() {
//         console.log("this-2",this);
// 		return this.x;//若改为 return this;
// }

// this-1 {x: 23, fun2: ƒ, fun3: ƒ, fun4: ƒ}
// this-2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//12

// this-2 {x: 23, fun2: ƒ, fun3: ƒ, fun4: ƒ}
// 23
//若三个单独执行 还是再执行一次this-1 window{....}