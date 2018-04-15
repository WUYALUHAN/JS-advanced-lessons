//使用闭包可以使得函数中的变量都被保存在内存中不被释放
function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3=f1();
console.log(f3());//1
console.log(f3());//2

function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3=f1();
console.log(f3);//1
console.log(f3);//1
//常见形式
function createinc(stepvalue){
	return function(step){
	stepvalue+=step;
	return stepvalue;
	}
}
var inc=createinc(5);
console.log(inc(1));//6
console.log(inc(2));//8

var tmp=100;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);//fee形成了闭包
fee(10);//16
fee(10);//17
//闭包只包含返回的函数对象以及他处在作用域下的变量
var z=100;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp))+z;
	}
}
var fee=foo(2);//fee形成了闭包,z是自由变量，可以访问，但不在闭包内
fee(10);//116
fee(10);//117

function counter(){
	var n=0;
	return{
		count:function(){return ++n;},
		reset:function(){n=0;return n;}
	}
}
c=counter();d=counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
//和IFF的结合（）
var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);

// 闭包实例
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，
// 这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，
// 不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
var n=999;//注释此行，结果是10，11
nAdd=function(){n+=1;};//思考：nAdd是闭包么? n是哪个作用域下的变量
                             //是闭包，n=999是function f1下的
function f2(){
console.log(n);
}
return f2;
}
var result=f1();
result(); // 输出999
nAdd();//调用使得n+1
result(); // 输出1000

var m = 10;
function f1(){
nAdd=function(){++m;};
function f2(){
console.log(m);
}
return f2;
}
var result1=f1();
var result2=f1();
result1(); // 输出10
nAdd();//函数nAdd是存在f1里的全局函数，外部可以访问，调用后，不同指向的			//result1，result2内的变量都会++
result2(); // 输出11
result1();// 输出11

//闭包应用实例
var db = (function() {
// 创建一个隐藏的object, 这个object持有一些数据
// 从外部是不能访问这个object的
var data = {};
// 创建一个函数, 这个函数提供一些访问data的数据的方法
return function(key, val) {
if (val === undefined) { return data[key] } // get
else { return data[key] = val } // set
};
// 我们可以调用这个匿名方法
// 返回这个内部函数，它是一个闭包
})();

db('x'); // 返回 undefined
db('x', 1); // 设置data['x']为1
db('x'); // 返回 1
// 我们不能直接访问data这个object本身
// 但是我们可以设置它的成员