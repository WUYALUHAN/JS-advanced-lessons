//小测总结

//1111111对象类型
console.log(Math instanceof Function);
// false
Math instanceof Object
true
typeof JSON
//"object"
var a={x:1,y:2},b={x:1,y:2}
console.log(a==b,a===b,a.x===b.x)//自身属性是基本数据类型，按值进行比较；对象类型不指向同一地方都是false
// false false true

2==new Number(2);
//true
2===new Number(2);
//false
(5>4)&&([]==[])
//false
({})&&null
//null
(2>3)||5
//5

for(var i=1;i<=3;i++){
	(function(i){////////形成作用域块
		setTimeout(function(){console.log(i)},0)
	}(i))////////
};
//1
//2
//3

for(var i=1;i<=3;i++){
	//(function(i){////////形成作用域块
		setTimeout(function(){console.log(i)},0)
	//}(i))////////
};
//4 4 4

//预解析和内部作用域会屏蔽外部作用域
var foo=1;//不会访问到
(function(){//var foo;
	console.log(foo);  
	var foo=2;         //foo=2;
	console.log(foo);
})();
// undefined
// 2

//1)闭包
var tmp=10;
function foo(x){
	var tmp=3;                           
	return function(y){ console.log(x+y+(++tmp));}//静态词法作用域，访问tmp变量定义时候，即内部
}
var fee=foo(2);
fee(10); fee(10); fee(10);
// 16
// 17
// 18

//shift()去掉第一个
var aa=[1,2,3];
var bb=aa;//bb和 aa指向同一块
bb.shift();//aa=[2,3]
bb=[2,3,4,5];//bb 和 aa 不在指向同一地方
bb.pop();//[2,3,4]
console.log(aa);//aa不变

function add(a,b){ this(a,b);  console.log(a+b);}
function sub(a,b){ console.log(a-b);}
var arr=[3,1];
add.apply(sub,arr);//第一个是调用函数，第二个是对象 add中的this指向sub();
// 2
// 4

//原型
var obj={};
var newObj=Object.create(obj);
console.log(newObj.__proto__===obj);
// true 

/////引用类型
var x=[1];
function foo(y){
	y[0]=2;
}
foo(x);
console.log(x[0]);
// 2

////////////////////////////////////////////////////////////
//期末复习倒序
//LS30
1.toString() 
方法可把一个逻辑值转换为字符串，并返回结果。
根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。
如果调用该方法的对象不是 Boolean，则抛出异常 TypeError。数值和布尔值的包装对象都有toString属性
2.map() 
把每个元素通过函数传递到当前匹配集合中，生成包含返回值的新的 jQuery 对象。
语法.map(callback(index,domElement))
参数callback(index,domElement)  描述对当前集合中的每个元素调用的函数对象。
详细说明:由于返回值是 jQuery 封装的数组，使用 get() 来处理返回的对象以得到基础的数组。
.map() 方法对于获得或设置元素集的值特别有用。
3.call()和apply()
https://www.cnblogs.com/lengyuehuahun/p/5643625.html

2018/6/23
模糊知识点：
字符和数字之间的拼接，运算