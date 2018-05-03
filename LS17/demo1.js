//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method


// 静态方法
var BaseClass = new Function();
var Class2 = BaseClass;
BaseClass.f1 = function(){
    console.log(" BaseClass ' s static method");
};
Class2.f2 = function(){
    console.log(" Class2 ' s static method");
};
BaseClass.f1();//BaseClass ' s static method
BaseClass.f2();//Class2 ' s static method
Class2.f1();//BaseClass ' s static method
Class2.f2();//Class2 ' s static method
console.log(BaseClass === Class2);//true


//原型方法 和 实例方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a instance method ");
};
var instance1 = new BaseClass();
instance1.method1();//This is a instance method

instance1.method1 = function(){
    console.log("2 This is a instance method too ");
};
instance1.method1();//This is a instance method too 覆盖了原型的方法
//先找自身的，没有的话再找原型上的

// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);//Foo

// 2 创建相似对象
function Constr(name){this.name=name;}
var x=new Constr("jack");
var y=new x.constructor('mike');
console.log(y,y instanceof Constr);
// Constr {name: "mike"} true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正,回指自身
console.log(Father.prototype.constructor); //function father()

//思考一下
Function.__proto__===Function.prototype;//(鸡生蛋 蛋生鸡)
//true