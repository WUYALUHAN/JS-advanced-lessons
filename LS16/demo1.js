//this不进行作用域传递、函数嵌套中的this存在缺陷

//在对象条件中this（在嵌套条件下）
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveTox(x){this.x=x;};
		function moveToy(y){this.y=y;};
		moveTox(x);
		moveToy(y);
	}
};
point.moveTo(1,1);
console.log(point);
console.log(window.x,window.y);
// {x: 0, y: 0, moveTo: ƒ}moveTo: ƒ (x,y)x: 0y: 0__proto__: Object
// 1 1
//方法一：that软绑定解决
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		var that=this;
		function moveTox(x){that.x=x;};
		function moveToy(y){that.y=y;};
		moveTox(x);
		moveToy(y);
	}
};
point.moveTo(1,1);
console.log(point);
console.log(window.x,window.y);
// {x: 1, y: 1, moveTo: ƒ}
// 1 1

//方法二：用call和apply硬绑定解决
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveTox(x){this.x=x;};
		function moveToy(y){this.y=y;};
		moveTox.call(this,x);//不在嵌套里的this还是指向point
		moveToy(y);//this在嵌套里指向window
	}
};
point.moveTo(1,1);
console.log(point);
console.log(window.x,window.y);
//{x: 1, y: 0, moveTo: ƒ}
//undefined 1

//方法三：用bind函数硬绑定解决
var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveTox(x){this.x=x;};
		function moveToy(y){this.y=y;};
		moveTox.bind(this,x)();//不在嵌套里的this还是指向point
		moveToy.bind(this,y)();//this在嵌套里指向window
	}
};
point.moveTo(1,1);
console.log(point);
console.log(window.x,window.y);
// {x: 1, y: 1, moveTo: ƒ}
// undefined undefined

//在构造函数中this（在嵌套条件下）
function Point(x,y){
	this.x=x;
	this.y=y;
	this.movexy=function(x,y){
		function movex(x){ this.x+=x; }
		function movey(y){ this.y+=y; }
		movex(x);
		movey(y);
	};
}
var p=new Point(2,3);
p.movexy(1,1);
console.log(p);
// Point {x: 2, y: 3, movexy: ƒ}

//用call和apply硬绑定解决
function Point(x,y){
	this.x=x;
	this.y=y;
	this.movexy=function(x,y){
		function movex(x){ this.x+=x; }
		function movey(y){ this.y+=y; }
		//不在嵌套里的this还是指向point
		movex.call(this,x);//movex.(x);
		movey.apply(this,[y]);//movey(y);
	};
}
var p=new Point(2,3);
p.movexy(1,1);
console.log(p);
// Point {x: 3, y: 4, movexy: ƒ}

//用bind函数硬绑定解决
function Point(x,y){
	this.x=x;
	this.y=y;
	this.movexy=function(x,y){
		function movex(x){ this.x+=x; }
		function movey(y){ this.y+=y; }
		movex.bind(this,x)();//movex.call(this,x);
		movey.bind(this,y)();//movey.apply(this,[y]);
	};
}
var p=new Point(2,3);
p.movexy(1,1);
console.log(p);
//Point {x: 3, y: 4, movexy: ƒ}
