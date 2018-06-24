// ES5 中实现函数参数默认值的方法
//优化版
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0


// ES6 中实现函数参数默认值的方法 ,使用babble查看ES5的写法
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

//注意事项
//1.带默认值的参数变量是默认声明的，所以函数体内不能再用let或const重复声明
(function fun(x=3){
	let x=9;//报错
	const x=8;//报错
	var x=4;//正常
	console.log(x);
})();
//4
//2.参数一般有顺序，有默认值的参数应该是尾参数，这样可以使有默认值的用默认值， 没有默认值的用传递的值
function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
//f(,3);//报错，无法使x用1，y用3