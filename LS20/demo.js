//
//replace
var str='aabbcccdd';
str.replace('aa','XX');
//"XXbbcccdd"
var str='a fAt bat, a faT cat';
var reg1=/[bc]at/gi;
str.replace(reg1,'xx');
//"a fAt xx, a faT xx"
var str='a fAt bat, a faT cat';
var reg2=new RegExp(/fat/gi);
str.replace(reg2,'xx');
//"a xx bat, a xx cat"
var str='a fAt bat, a faT cat';
var reg2=new RegExp(/fat/,'gi');
str.replace(reg2,'xx');
//"a xx bat, a xx cat"
var str='a fAt bat, a faT cat';
var reg2=new RegExp(/fat/,'i');
str.replace(reg2,'xx');
//"a xx bat, a faT cat"
var str='a fAt bat, a faT cat';
var reg2=new RegExp(/fat/,'g');
str.replace(reg2,'xx');
//"a fAt bat, a faT cat"

//split

var str='xx-xy-yy';
var s=str.split('-');
console.log(s);
// (3) ["xx", "xy", "yy"]

var str='xx-xy-yy';
var s=str.split(' ');
console.log(s);
// ["xx-xy-yy"]

var str='xx-xy-yy';
var s=str.split(',');
console.log(s);
// ["xx-xy-yy"]

var str='xx-xy-yy';
var s=str.split('');
console.log(s);
// (8) ["x", "x", "-", "x", "y", "-", "y", "y"]

var str='xx-xy-yy';
var s=str.split(/-/gi);
console.log(s);
// (3) ["xx", "xy", "yy"]

var str='xx-xy-y*y';
var s=str.split(/-*/gi);
console.log(s);
// (7) ["x", "x", "x", "y", "y", "*", "y"]

var str='xx-xy-y*y';
var s=str.split(/[-*]/gi);
console.log(s);
// (4) ["xx", "xy", "y", "y"]


'a2b5'.replace(/\d/gi,'X');// \d匹配任意数字
"aXbX"
'a2b5'.replace(/\w/gi,'X');// \w匹配任意字符
"XXXX"
'a2b5'.replace(/\D/gi,'X');// \D匹配任意字母
"X2X5"
'x2x-x1y-y*y'.replace(/\W/gi,'X');// \W匹配非字符
"x2xXx1yXyXy"

//分组
console.log('namenamename_111'.replace(/name{3}/,'x'));
console.log('namenamename_111'.replace(/(name){3}/,'x'));
VM194:1 namenamename_111
VM194:2 x_111

//test,
//全局下，值一直在变化是因为第一次从0开始索引找到a，后值变为1，直到找到为后一位，再从0开始索引
var regExp=/a/gi;
console.log(regExp.test('ab'));
// true
console.log(regExp.test('ab'));
// false
console.log(regExp.test('ab'));
// true
console.log(regExp.test('ab'));
// false
//非全局下，每次都从0开始
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

//RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，属性index表示匹配到的位置
//全局下
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
//(3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 6
// (3) ["233", "3", "3", index: 11, input: "12s342dsfsf233s"] 14

//match方法
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//["Ab", index: 2, input: "xxAbcaaBbxyz"]
var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
// (2) ["Ab", "aB"]
undefined
var regExp = /a*b/gi; //注意*和.的区别 *是有任何个a和b进行组合
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(3) ["Ab", "aaB", "b"]
var regExp = /a.b/gi;//注意*和.的区别  .是代表任意一个字符
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
// ["aaB"]
var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com
var matchResult = "xxAbcaaaBbxyz".match(regExp);
console.log(matchResult);
//(3) ["Ab", "aaaB", "b"]

//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
for(var i=0;i<numbers.length;i++){
	var r1=/1(3[4-9]|47|5([0-2]|[5-9])78|8([2-4]|[7-8]))/g
	if()
}