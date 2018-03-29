// 数组
var a=new Array(5);
console.log(a);// (5) [empty × 5]length: 5__proto__: Array(0)
var b=new Array('5');
console.log(b);//["5"]
//函数对象
console.log(typeof new Function());//new了构造函数 返回function
console.log(typeof new new Function() );//实例化一个构造函数 返回对象 object
console.log(typeof new new new Function());//报错
//内置的函数对象（Array、Function、Date等），内置的非函数对象（Math、JSON）
console.log( Date instanceof Function);//t
console.log( Date instanceof Object);//t

console.log( Math instanceof Function);//f
console.log( Math instanceof Object);//t

console.log( JSON instanceof Function);//f
console.log( JSON instanceof Object);//t
