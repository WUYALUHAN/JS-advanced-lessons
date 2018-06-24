// ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// "f"
// "o"
// "o"

//提供新的方法用于查找、判断和生成字符串
var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true

//第二个参数，表示开始搜索的位置
var s = 'Hello world!';
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false
//同样正则表达式也可以
var reg1=/^hello/gi;
var reg2=/\bhello/gi;
'hello world'.replace(reg1,'*');//"* world"

//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3);//"xxx"
'hello'.repeat(2);//"hellohello"
'na'.repeat(2.8);//"nana"
'na'repeat(Infinity);//报错// RangeError
'na'.repeat(-1);// RangeError
var reg=new RegExp(/abc/ig,'i');
reg.flags;//检验使用的方法？
"i"
isNaN('xx');
//true

//当
function foo(){
	console.log(arguments instanceof Array);
	console.log(arguments instanceof Object);//true
	console.log(arguments.constructor);//原型
}
foo(1,2,3,'4','5');
//false
//true
// ƒ Object() { [native code] }

//////对数组的切分
function fo(){
	var arr=Array.prototype.slice.call(arguments);
	console.log(arr);
}
fo(1,2,'3');
// (3) [1, 2, "3"]

function fo(){
	var arr=Array.from(arguments);
	console.log(arr);
}
fo(1,2,'3');
 (3) [1, 2, "3"]

var abc={a:1,'0':2,length:3};
var arr=Array.from(abc);
console.log(arr);
VM1328:3 (3) [2, undefined, undefined]

var a=new Array(5);
var b=new Array('5');
console.log(a);
console.log(b);
//(5) [empty × 5] 
//["5"]

var a=Array.of(5);
var b=Array.of('5');
console.log(a);
console.log(b);
//[5] 
//["5"]