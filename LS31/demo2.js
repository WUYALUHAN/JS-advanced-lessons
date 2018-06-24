//Symbol()值的遍历

var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj['s1']=456;
obj.s2=678;
for(var k in obj){//只遍历到一般的类型
	console.log(k,obj[k],typeof k);
}
//s1 456 string
// s2 678 string
Object.getOwnPropertySymbols(obj);
//(2) [Symbol(), Symbol()]

var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj['s1']=456;
obj.s2=678;
Object.getOwnPropertySymbols(obj).forEach(function(v){//getOwnPropertySymbols().forEach()遍历到symbol
	console.log(v,obj[v],typeof v);
});
//Object.getOwnPropertySymbols(obj).forEach((v)=>console.log(obj[v]));可以转换成箭头函数
// Symbol() 123 "symbol"
// Symbol() 345 "symbol"

//Symbol.for()方法
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

//Symbol.for()与Symbol()的区别
//都会生成新的Symbol,前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，
// 但是调用Symbol("cat")30次，会返回30个不同的Symbol值。

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1=Symbol.for('sym');
Symbol.keyFor(s1);//"sym"
var s2=Symbol('sym');
Symbol.keyFor(s2);//undefined

var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);//f
console.log(s2 === s3);//f
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);//t
console.log(s2 === s4);//f