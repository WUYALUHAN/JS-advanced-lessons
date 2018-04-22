// JS对象访问器（访问器属性）的特性
// - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
// - 可枚举特性（[[enumerable]]），属性是否可枚举
// - 读取属性特性（[[get]]），在读取属性时调用的函数，默认是undefined
// - 写入属性特性（[[Set]]），在写入属性时调用的函数，默认是undefined

Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Daisy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Daisy"

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Daisy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);/Daisy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true,第三个输出undefined
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;//delete person.name;
console.log(person.name);//Lucy