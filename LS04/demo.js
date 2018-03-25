//JS语法、表达式及语句综述
obj = {x:2,y:3};// ={x:2}为对象初始化表达式
arr = [1,2,'true'];// =[1,2]为数组初始化表达式
var foo = function(){ // = function(){}为函数定义表达式
console.log("foo");
};
obj.x;//obj.x为属性访问表达式2
foo();//foo()为函数调用表达式
2+3;//2+3为算数运算表达式
2>3;//2>3为关系运算表达式
1&&2;//1&&2为逻辑运算表达式
var a = [1,2,3];
var b = a;
console.log(a,b);//(3) [1, 2, 3] (3) [1, 2, 3]
b.pop();
console.log(a,b);// (2) [1, 2] (2) [1, 2]
b = [4,5,6];
console.log(a,b);//(2) [1, 2] (3) [4, 5, 6]
//块作用域
//严格模式下
//this是undefined 非严格模式下是全局变量 函数可以检测
function isStrictMode(){
	if(this==window){
		return true;}
	else{
		return false;}
}
isStrictMode();//true
'use strict'
function isStrictMode(){
	if(this===window){
		return true;}
	else{
		return false;}
}
isStrictMode();//false
//严格模式下禁止删除不可改变的属性和未定义的变量
var str='abcd';
function sloppyFunc() {
str.length = 7;
console.log(str.length);//
}
sloppyFunc();//7

function strictFunc() {
'use strict';
str.length = 7;
console.log(str.length);
}
strictFunc();//报错

//switch语句

var j = new Number(23);
switch (j){
case 23:
console.log("case_111");
break;
case "23":
console.log("case_222");
break;
case new Number(23):
console.log("case_333");
break;
default:
console.log("case_default");//输出
}

//case 可以是语句
var i = 65;
switch(true){
case i>=60:
alert('及格');
break;
case i<60:
alert('不及格');
break;
default:
alert('default');
}
//贯穿性
//求某月某日是一年中的第几天?
//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
console.log(k,obj[k],typeof obj[k]);}