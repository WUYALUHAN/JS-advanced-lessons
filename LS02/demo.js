//数据类型 typeof
console.log(typeof 123)
console.log(typeof true)
console.log(typeof 'abc')
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {name:'milk',age:20})
console.log(typeof function foo(){});
// VM76:1 number
// VM76:2 boolean
// VM76:3 string
// VM76:4 object
// VM76:5 undefined
// VM76:6 object
// VM76:7 function

//检验 数据类型是对象还是函数
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);//String、Boolean
console.log(typeof Math);
console.log(typeof JSON);
// VM78:1 function
// VM78:2 function
// VM78:3 function
// VM78:4 function
// VM78:6 object
// VM78:7 object
//对象instanceof类型 返回是否为真 该类型
var a = {name:"Mike",age:20};
console.log(a instanceof Object);
var b = [12,34];
console.log(b instanceof Array);
console.log(b instanceof Object);
// VM82:2 true
// VM82:4 true
// VM82:5 true
//函数是定义在window下
var foo=function(){
    console.log(12);
};
console.log(foo instanceof Function);//true
console.log(foo===window.foo);//true
console.log(foo instanceof Object);//true
//引用型数据类型的赋值和修改
//字符串
var str1='a';
var str2=str1;
console.log(str2);//a
str2='b';
console.log(str1,str2);// a b
//对象
var obj1={a:1};
var obj2=obj1;
obj2.a=2;
console.log(obj1,obj2);// {a: 2} {a: 2}
obj2={a:3};
console.log(obj1,obj2);//{a: 2} {a: 3}
//在函数中
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// {value: 3}
function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);//{value: 3}
var obj_a = {value:1};
function fn_a(arg){
	arg={value:2};
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);//{value: 1}
//数据类型的值
//Number
var x = Number("h5lianxi");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof isNaN;//"function"
typeof NaN;//"Number"
console.log(typeof null);// object
console.log(parseInt(123.45));//123
console.log(parseFloat('123.45xy'));//123.45
//指数形式
a3 = 5e2;
console.log(a3);//500
console.log(typeof Math);object
var b=3e4;
console.log(b);//30000
console.log(typeof Math);//object
//字符串
var str='ab_c_d_f_g_h';
str.split('_');//(6) ["ab", "c", "d", "f", "g", "h"]
str.split('_',3);//(3) ["ab", "c", "d"]
str.concat('_ij');//"ab_c_d_f_g_h_ij"
str.slice(2);//"_c_d_f_g_h"
str.substr(2,4);//"_c_d"
str.substring(2,4);//"_c"
str.slice(2,4);//"_c"
str.slice(-1);//"h"
str.slice(1,-2);//"b_c_d_f_g"
str.bold()//"<b>ab_c_d_f_g_h</b>"
//未定义是undefined
function f(x,y){
	console.log(x,y);
}
f(9);//9 undefined
//Object的属性
var obj={x:1,y:2,z:3};
console.log(obj.__proto__ === Object.prototype);//true
console.log(Object.prototype);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

for(var i in obj){
	console.log(i,obj[i]);
}
//x 1 
//y 2
//z 3
//function
function fun(){
	console.log('fun function');
};
fun();//fun function
console.log("call" in fun);//true
console.log("apply" in fun);//true
console.log("arguments" in fun);//true
//复习
var a=22;
var b=new Number(a);
console.log(a===b);//false
console.log(a==b);//true
//包装对象
var str2='abc';
console.log(str2.length);//3
str2.length=7;
console.log(str2.length,str2);//3 "abc"
//引用对象属性可改变
var arr=[1,2,3,4];
console.log(arr.length);//4
arr.length=7;
console.log(arr.length,arr);//(7) [1, 2, 3, 4, empty × 3]
//Boolean
if(new Boolean(false)){
	console.log('zhixing');
}
//zhixing
if(Boolean(false)){
	console.log('zhixing');//没有
}
//隐形转换
//字符串的拼接
var a2='34'-5;
console.log(a2);// 29
var a3=5+'23';
console.log(a3);// 523
//Boolean
var a4=!!2;
console.log(a4);//true
var a4=!2;
console.log(a4);//false

var n2=124598.099754;
console.log(n2.toFixed(4));
console.log(n2.toPrecision(3));
console.log(n2.toString());
console.log(n2.toExponential(2));
//124598.0998
//1.25e+5
//124598.099754
//1.25e+5
console.log(Math.round(3.8));//4
console.log(Math.round(-3.2));//-3
console.log(Math.floor(34.11));//34
console.log(Math.floor(-34.11));//-35
console.log(Math.ceil(3.8));//4
console.log(Math.ceil(-3.8));//-3
Math.random()*10+1;//4.756522189766571
console.log("A" > "a");// false