//对象是什么
var me={
	age:100,
	name:"unknown",
	show:function(){
		console.log("我是"+this.name+'今年'+this.age+'岁了');
	}
}
//undefined
me.show();
// 我是unknown今年100岁了

//对象的分类
//typeof
//构造器函数对象
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Date);//function
console.log(typeof Object);//function
//非构造器对象
console.log(typeof Math);//object
console.log(typeof JSON);//object

console.log(new Function() instanceof Function);
//true new的function是function，再new是实例化出对象，不是函数
console.log(new(new Function()) instanceof Function);
//false
console.log(new(new Function()) instanceof Object);
//true

//instanceof
//Object,Boolean,String,Number,Function,Array,Date 对于Function和object都是true
//因为他们都是构造器函数，而一切都是对象，Math和Json例外
console.log(Object instanceof Function);//t
console.log(Object instanceof Object);//t
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t

