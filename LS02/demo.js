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
// undefined
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
// undefined
var a = {name:"Mike",age:20};
console.log(a instanceof Object);
var b = [12,34];
console.log(b instanceof Array);
console.log(b instanceof Object);
// VM82:2 true
// VM82:4 true
// VM82:5 true
// undefined
var foo=function(){
    console.log(12);
}
console.log(foo instanceof Function);
window.foo=ƒunction(){
    console.log(12);
}
foo===window.foo
var a=Number('xx1s2s');
// VM99:5 Uncaught SyntaxError: Unexpected token {
var foo=function(){
    console.log(12);
}
console.log(foo instanceof Function);
// VM101:4 true
// undefined
console.log(foo instanceof Object);
// VM128:1 true
// undefined
foo===window.foo
var a=Number('xx1s2s');
//true
a;
//NaN
var str1='a';
var str2=str1;
str2='b';
console.log(str1,str2);
// VM304:4 a b
//undefined
var obj1={a:1};
var obj2=obj1;
obj2.a=2;
console.log(obj1,obj2);
obj2={a:3};
console.log(obj1,obj2);
// VM412:4 {a: 2} {a: 2}
// VM412:6 {a: 2} {a: 3}
// undefined
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);
//VM472:6 {value: 3}
//VM472:12 {value: 3}
var obj_a = {value:1};
function fn_a(arg){
	arg={value:2};
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);
//VM468:7 {value: 1}
