JSON
//JSON {parse: ƒ, stringify: ƒ, Symbol(Symbol.toStringTag): "JSON"}

var a1=[1,"x",true,{y:2,z:3}];
var jsonj1=JSON.stringify(a1);
console.log(jsonj1);
console.log(a1);
// [1,"x",true,{"y":2,"z":3}]
// (4) [1, "x", true, {…}]

function replacer(key,value){
	if(typeof value==='string')
		return undefined;
	return value;
}
var foo={
	male:'box',
	week:5,
	transport:'bus',
	month:7
}
var jsonstring1=JSON.stringify(foo,replacer);
console.log(jsonstring1);
// {"week":5,"month":7}

function replacer(key,value){
	if(typeof value==='string')
		return 1111;
	return value;
}
var foo={
	male:'box',
	week:5,
	transport:'bus',
	month:7
}
var jsonstring1=JSON.stringify(foo,replacer);
console.log(jsonstring1);
// {"male":1111,"week":5,"transport":1111,"month":7}

ar o7=JSON.parse('{"p":5,"x":2}',function(k,v){
	if(k==="p") return 2*v;
	if(k==="x") return 3*v;
	if(k==='') return v;
});
console.log(o7);
// {p: 10, x: 6}

var o6=JSON.parse('{"p":5}',function(k,v){
	console.log("回调调用");
	if(k==='') return v;
	return v*2;
});
console.log(o6);
//2 回调调用
// {p: 10}