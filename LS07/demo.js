//函数
//
var x=45;
var test=function(){
 console.log('输出',this.x);
}
var obj={
	x:23
}
obj.test=test;
obj.test();//输出 23
test();// 输出 45
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){ 		
			console.log('输出',this.x);
			}
		foo();
	}
};
obj.test();// 输出 45