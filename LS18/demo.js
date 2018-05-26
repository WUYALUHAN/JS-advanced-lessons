var arr2=new Array(5);
console.log(arr2);
// (5) [empty × 5]

var arr2=new Array('5');
console.log(arr2);
// ["5"]  //没有发生类型转换


var arr22=[];
for(var i=0;i<5;i++){
	document.onclick=function(){
		arr22[i]=i;
	}
}//异步执行，此时i已经等于5
// ƒ (){
// 		arr22[i]=i;
// 	}
arr22;
//(6) [empty × 5, 5]

//Array是对象类型，引用，指向同一个空间，相互受影响
var a1=[1,2,3];
var a2=a1;
a2.length=0;
console.log(a1,a2);
// [] []
var a3=[1,2,3];
var a4=a3;
a4=[];//相当于开辟了另一个空间,不影响a3.
console.log(a3,a4);
// (3) [1, 2, 3] []

//操作 增删改查
//删
var arr=[1,2,3];
delete arr[2];//删除的不彻底，只是置空
console.log(arr);
// (3) [1, 2, empty] 

var arr=[1,2,3];
arr.length=2;//用长度
console.log(arr);
//(2) [1, 2]

var i=2,b=[];
b[i]=3;
b[i+1]='YY';
b[b[i]]=b[0];
console.log(b);
// (4) [empty × 2, 3, undefined]  //不用纠结empty 和undefined

//
var arr=[];
arr[-1.23]='xx';//属性
arr;
//[-1.23: "xx"]
arr.hasOwnProperty('-1.23');
//true
arr[-1.23];
//"xx"  //隐式转换
arr['5']='yy'; //arr[5]
arr;
//(6) [empty × 5, "yy", -1.23: "xx"]
arr[1.23]=12;//还是属性
arr;
(6) [empty × 5, "yy", -1.23: "xx", 1.23: 12]

function f(){
	console.log(arguments);
}
f(1,2,'x');
// Arguments(3) [1, 2, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]

//稀疏数组
var a1=[,,];
console.log(a1.length);
// 2  最后一个逗号之后的不算

var a2=[,'abc'];
console.log(a2.length);
// 2

for(var i in a2){
	console.log(i,a2[i]);
}
// 1 abc //遍历时，跳过无元素项

//二维数组
ar table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
console.log(table);
//(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]0: (5) [0, 0, 0, 0, 0]1: (5) [0, 1, 2, 3, 4]2: (5) [0, 2, 4, 6, 8]3: (5) [0, 3, 6, 9, 12]4: (5) [0, 4, 8, 12, 16]length: 5__proto__: Array(0)

table[1][2]
2
table[4][4]
16
table[2][4]
8
//isArray()检测是不是数组
var arr1=[1,2];
console.log(Array.isArray(arr1));
// true

function f(){
	//console.log(arguments);
	arguments.pop();
}
f(1,2,'x');
//报错
function f(){
	console.log(arguments);
	Array.prototype.pop.call(arguments);
	console.log(arguments);
}
f(1,2,'x');
// Arguments(3) [1, 2, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

var arr=[1,3,4];
var l=arr.push(5,6);
console.log(l,arr);
//倒序
var arr1=[1,4,3];
arr1.reverse();
console.log(arr1);
// (3) [3, 4, 1]


//高阶函数
var arr2=[1,3,5,7,9];
var newArray=arr2.map(function(a){
	
})

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a){
	console.log(a,this);//this指向window
})
console.log(arr1);
VM261:4 2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
VM261:4 5 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
VM261:4 8 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
VM261:6 (3) [2, 5, 8]
undefined
var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){//回调函数第二个参数是索引
	console.log(a,this);//this指代第二个对象
},arr2)
console.log(arr1);
VM276:4 2 (3) [1, 6, 7]
VM276:4 5 (3) [1, 6, 7]
VM276:4 8 (3) [1, 6, 7]
VM276:6 (3) [2, 5, 8]