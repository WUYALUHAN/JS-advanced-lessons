var name='Jack';
var person={
	name,
	showInfo(){
		console.log(this.name);
	}
}
person.showInfo();
VM145:5 Jack
undefined
var obj = Object.create({x:1,y:2});
console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj,{z:3});
console.log(Object.getPrototypeOf(obj));
VM146:2 {x: 1, y: 2}
VM146:5 {z: 3}

var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);// 1 2 3 4

var obj3={a:1,b:2};
var obj4=Object.create(obj3);
obj4.c=3;
obj4.d=4;
console.log(obj4.a,obj4.b,obj4.c,obj4.d);// 1 2 3 4

Object.keys(obj4);
(2) ["c", "d"]
'a' in obj4;//true
var obj = { foo: 'bar', baz: 42 };
Object.entries(obj);// [ ["foo", "bar"], ["baz", 42] ]
for(var [k,v] of Object.entries(obj)){ //解构赋值
    console.log(k,v);
}
//foo bar
// baz 42
