var temp=new Date();
function f(){
	console.log(temp);
	if(false){
		var temp = "Hi!";
    }
}
f();
// undefined

var temp=new Date();
function f(){
	console.log(temp);
	if(false){
		let temp = "Hi!";
	}
}
f();
// Thu Jun 07 2018 08:19:06 GMT+0800 (中国标准时间)

var temp=new Date();
function f(){
	console.log(temp);
	//if(false){
		let temp = "Hi!";
	//}
}
f();
//报错 temp is not defined

let b=2;
typeof b
"number"
let b=3;
// Identifier 'b' has already been declared

var a=2;
var a=4;
a;
4

function foo1(x){
	let x;
	var x;
	console.log();
}
foo1(5);
//Identifier 'x' has already been declared