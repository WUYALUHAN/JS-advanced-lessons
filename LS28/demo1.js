//对象的解构赋值  
//几种情况
//正常情况下进行匹配
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);
// aaa bbb

//与数组有一个重要的不同。
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);//aaa bbb
var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);//undefined （找不到）

//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"
///////////////
let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);
//两种情况结果相同，hello world 上面是键值对 下面是直接匹配
let { first, last } = obj1;
console.log(first,last);
//总结：内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);// "aaa"
//foo6 // error: foo is not defined
//上面代码中，真正被赋值的是变量baz6，而不是模式foo6

//嵌套结构
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World"
//思考console.log(p);报错
//解决问题
var obj1= {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p :p} = obj1;//var { p } = obj1;也ok
console.log(p);
(2) ["Hello", {y: "World"}]

//嵌套赋值的例子，为什么加括号，如果不加括号解析器将解析为代码块，所以加括号
//比较奇怪的例子
let obj3 = {};
let arr = [];
({ foo7: obj3.prop, bar7: arr[0] } = { foo7: 123, bar7: true });
console.log(obj3);// {prop:123}
console.log(arr);// [true]

//对象的解构也可以指定默认值。
var {x3, y3 = 5} = {x3: 1};
console.log(x3,y3); // 1 5

var {x4:y4 = 3} = {};// 相当于直接给变量赋值
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};//和数组同理
console.log(y5); // 5

var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"