//Symbol值可以作为标识符，用于对象的属性名
//使用Symbol是用[]，而不是用点操作符
var mysymbol=Symbol();
var a={};
a[mysymbol]='hello';//第一种写法
var b={
	[mysymbol]:'hello'//第二种方法
};
var c={};
Object.defineProperty(c,mysymbol,{value:'hello'});//第三种方法
console.log(a);
console.log(b);
console.log(c);
// {Symbol(): "hello"}
// {Symbol(): "hello"}
// {Symbol(): "hello"}

//独一无二的
var sym1=Symbol('xx');
var sym2=Symbol('xx');
var str1='yy';
var str2='yy';
var obj={};
obj[sym1]='12';
obj[sym2]='34';//两个不同的属性
obj[str1]='56';
obj[str2]='78';//str2和str1相同，会覆盖
obj;
//{yy: "78", Symbol(xx): "12", Symbol(xx): "34"}

//注意：Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
var mysymbol=Symbol();
var a={};
a.mysymbol='hello';
console.log(a[mysymbol]);
console.log(a['mysymbol']);
// undefined  //因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，
				//导致a的属性名实际上是一个字符串，而不是一个Symbol值。
// hello

var mysymbol=Symbol();
var a={};
a[mysymbol]='hello';
console.log(a[mysymbol]);
console.log(a['mysymbol']);
// hello
// undefined

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//输出 123 如何解释Symbol：第二个是重新的Symbol值，未定义
console.log(obj[myS2],obj["xx"]);//字符相同即共用值
// 123 undefined
// 456 456
obj;
//{xx: 456, Symbol(xx): 123}

let s = Symbol();
let obj = {
    [s]: function (arg) {console.log(arg);}
    //[s](arg) {console.log(arg);}//加强版写法
};
obj[s](123);
//123