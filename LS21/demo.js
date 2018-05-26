//异常捕获
var a=new Array(-3);//报错

// try...catch
try{
	var a=new Array(-3);
}
catch(e){
	console.log(e);
}
// RangeError: Invalid array length
    //at <anonymous>:2:8

// try...finally
try{
	var a=new Array(-5);
}
finally{
	console.log('finally');
}
// finally
   //报错

// try...catch...finally finally子句无论是否有异常抛出或着是否被捕获它总是执行。
try{
	var a=new Array(-5);
}
catch(e){
	console.log(e);
}
finally{
	console.log('finally');
}
// RangeError: Invalid array length
    //at <anonymous>:2:8
// finally

//try...catch
//catch语句中包含要执行的语句，当try语句中抛出错误时。
//try块中有任何一个语句（或者从try块中调用的函数）抛出异常, 控制立即转向catch子句。
//try块中没有异常抛出，则catch子句将会跳过。
try{
	throw "abc";
}
catch(e){
	console.log(e+'1');
}
// abc1
undefined
try{
	console.log('xx');
}
catch(e){
	console.log(e);
	console.log('yy');
}
// xx

console.assert(3>2,'xx');//断言：如果3>2，那么后面的不会执行
//undefined
console.assert(3<2,'xx');//断言：如果3<2不为真，那么后面的会执行

// 嵌套 执行顺序
try{
	try{
		throw 'oops';
	}
	catch(ex){
		console.log('inner',ex);//错误被捕获，外层的catch直接跳过
	}
	finally{
		console.log('finally');
	}
}
catch(ex){
	console.log('outer',ex)
}
// inner oops
//finally

try{
	try{
		throw 'oops';
	}
	catch(ex){
		console.log('inner',ex);
		throw ex;//又抛出错误
	}
	finally{
		console.log('finally');
	}
}
catch(ex){
	console.log('outer',ex)
}
// inner oops
// finally
// outer oops


try{
	function abc(x,cb){
		console.log(x);
		cb();		
	}
	abc('xx',function(){//回调函数
		var a=new Array(-1);
	});
}
catch(e){
	console.log(e);
}
VM927:3 xx
VM927:11 RangeError: Invalid array length
    at <anonymous>:7:9
    at abc (<anonymous>:4:3)
    at <anonymous>:6:2

try{
	function abc(x,cb){
		console.log(x);
		cb();		
	}
}
catch(e){
	console.log(e);
}
abc('xx',function(){
		var a=new Array(-1);
	});
VM929:3 xx
//报错

//eval很危险，破坏词法作用域
eval("console.log('xx')");
VM960:1 xx
undefined
eval("console"+".log('xx')");
VM962:1 xx

try{
	var x=y;
}
catch(e){
	console.log(e.name,e.message);
}
// ReferenceError y is not defined
undefined
try{
	var a=new function f(){};
}
catch(e){
	console.log(e.name,e.message);
}
