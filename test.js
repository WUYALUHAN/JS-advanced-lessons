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