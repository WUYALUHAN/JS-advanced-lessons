//&&
console.log(2>1&&4<5);//t
console.log(true&&(!2));//f
console.log(false&&('2'==2));//f
console.log(false&&false);//f
//||
console.log(2>1||4<5);//t
console.log(true||(!2));//t
console.log(false||('2'==2));//t
console.log(false||false);//f
//短路逻辑&&
console.log(2&&4);//4
console.log(0&&4);0
console.log({x:2}&&{name:"Jack"});//{name:"Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//world
//||
console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});{x:2}
console.log(null||"hello");"hello"
console.log({}||"world");{}
//应用sum函数
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1