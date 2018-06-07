//用解构赋值方式定义变量

//Part 1111111111111111 数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);//1 2 3
//let 也支持解构赋值
let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);// "baz"

let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);//1 [2, 3, 4]

let [d, e, ...f] = ['a'];
console.log(d,e,f);//"a" undefined []

//注意：如果解构不成功，变量的值就等于undefined
var [foo2] = [];
var [bar2, fee2] = [1];
console.log(foo2,fee2);// undefined undefined

//不完全解构的情况
let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);
// 1 2 4
undefined
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);
// 1 2

//赋值中可以带默认值
// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [foo3 = true] = [];  console.log(foo3);
// true
var [x3, y3 = 'b'] = ['a']; console.log(x3,y3);
//a b
var [x4=3, y4 = 4] = [2,undefined]; console.log(x4,y4);
//2 4
var [x5 = 1] = [null];console.log(x5);
//null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
//如果改成 var [m4 = n4, n4 = 1] = [];则不会保错m4=undefined n4=1
console.log(m1,n1,m2,n2,m3,n3);


//用另一个对象给其赋值，
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true

let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;//也可以指定赋值（奇数位）
console.log(a);
//(3) [1, 3, 5]