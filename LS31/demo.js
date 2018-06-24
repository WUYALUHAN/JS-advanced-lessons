//ES5中的属性名都是字符串，容易造成属性名冲突-->
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);
//方法被覆盖了

//-ES6引入了一种新的原始数据类型Symbol，表示独一无二的值，通过Symbol函数生成
//- Symbol变量属于基本数据类型（不是对象），Symbol前不能使用new命令
//- Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要用于区分变量
var s1=Symbol('foo');
s1;
//Symbol(foo)
var s2=Symbol();
typeof(s2);
//"symbol"

//Symbol的特点
//--Symbol()的参数只是表示Symbol值得描述，参数相同函数的返回值也不同
//无参数的情况
var s1=Symbol();
var s2=Symbol();
s1===s2;//false
//有参数的情况
var s1=Symbol('sym');
var s2=Symbol('sym');
s1===s2;//false
//--不能与其他值进行运算，
var s1=Symbol('sym');
console.log('your symbol is'+s1);//报错
//Uncaught TypeError: Cannot convert a Symbol value to a string
//但能转换成字符型
var s1=Symbol('sym');
String(s1);//"Symbol(sym)"
s1.toString();//"Symbol(sym)

var a={};
"toString" in a;//用空对象检测有toString方法
//true

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj={
	toString(){ return 'abc';}
}
const sym=Symbol(obj);//传入的是参数时，会自动调用方法
sym;
//Symbol(abc)