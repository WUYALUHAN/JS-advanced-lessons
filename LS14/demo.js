//上节课回顾
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var Obj3=function(){this.z=3;}//obj首字母大写
var obj3=new Obj3();
console.log(obj1,obj2,obj3);
// {x: 1}x: 1__proto__: Object
 //{y: 2}y: 2__proto__: 
 //Object Obj3 {z: 3}

var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString);//原型链上有toString属性
for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}


// JS对象属性（数据属性）的特性
 // - 属性的值（[[value]]），对应属性的值
 // - 可写特性（[[writable]]）	，确定属性是否可写性，(true or false 不可以再次修改)
 // - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置 (true or false 不可以再次修改)
 // - 可枚举特性（[[enumerable]]），属性是否可枚举

var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});// y 2
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
// y 2

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？
person.name = "Lucy";
console.log(person.name);//输出什么？
delete person.name;
console.log(person.name);//输出什么？
//Mike
//Mike
//Mike

//直接添加的属性，其所有特性默认都是true
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1 
//y 2 
//z 3

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到


//通过属性特性描述符来查看某一对象属性的特性
