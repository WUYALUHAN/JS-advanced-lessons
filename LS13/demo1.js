//js对象属性
//惯例，不想被外部访问的私有变量前加_
var o={
	_x:1.0,//如果都写成x会报错
	get x(){return this._x;},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);//1
o.x=2;
console.log(o.x);//2
//只读
var o={
	_x:1.0,
	get x(){
		return this._x;},
};
console.log(o.x);//1
o.x=2;
console.log(o.x);//输出1，get优先级高

var p1={
	_name:"Jack",
	_age:23,
	set age(val){//保护,不符合条件时不能写入
		if(val>0&&val<150){
			this._age= val;
		}else{
			console.log("请设置正常的年龄");
		}
	},
	get age(){
		return this._age;
	}
};
p1.age=178;
// 请设置正常的年龄
//178
p1.age=18;
18
console.log(p1.age);
//18
//一个综合案例
var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};// Math.atan2()函数返回点(x,y)和原点(0,0)之间直线的倾斜角.
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(p.r);// 1.4142135623730951
console.log(q.r);//2.8284271247461903
console.log(q.theta);//0.7853981633974483

