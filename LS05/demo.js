//赋值运算符
var a = 34;
if(a = 45){
console.log("是否会输出？");
}//输出
var b = 34;
if(45 == b){//为什么要这样写，有什么好处
console.log("是否会输出？");
}//不输出 避免代码出错还找不到报错的地方
//算数运算符
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log("5"-2); //3  加和减不一样
var x = "1";
console.log(++x); //2 
var x = "1";
Console.log(x++);//1
console.log(x+1);//11  注意++和--的隐式类型转换
//关系运算符
var x='1';
x +=1;
console.log(x);// 11
x /=1;
console.log(x);// 11
typeof x;//"number"

var obj1=new String('xyz');
var obj2=new String('xyz');
console.log("xyz"===obj1);//false
var a=new Boolean(false);
var b=new Boolean(true);
console.log(a,b);//Boolean {false}__proto__: Boolean[[PrimitiveValue]]: false Boolean {true}
var a=new Boolean(false);
var b=new Boolean(true);
console.log(a==b);// false
var a=new Boolean(23);
var b=new Boolean(true);
console.log(a==b);//false