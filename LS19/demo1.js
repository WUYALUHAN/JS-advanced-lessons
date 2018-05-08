//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//静态方法，以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log(new Date().getTime());//创建 对象应用，也是毫秒
// 1525675326668
// 1525675326669
console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));
// 0
// 86400000
console.log(Date.UTC(2018,5,8));//将给定的日期转换成毫秒,解释为UTC 协调世界时间
// 1528416000000

//Date原型方法 getter和setter相关
//getMonth()
var date1= new Date(2018,05,04);//相当于是变量从0-11
console.log(date1.getMonth());
console.log(date1);//月份+1
// 5
// Mon Jun 04 2018 00:00:00 GMT+0800 (中国标准时间)//月份+1

var date2= new Date('2018,06,03');//相当于是真实日期
console.log(date2.getMonth());//月份-1
console.log(date2);
// 5
//Sun Jun 03 2018 00:00:00 GMT+0800 (中国标准时间)//月份不变

var date4= new Date('2018-05-04');//和date2类似
console.log(date4.getMonth());//月份-1
console.log(date4);
// 4
// Fri May 04 2018 08:00:00 GMT+0800 (中国标准时间)//月份不变

var today=new Date();
today.setMonth(6);
console.log(today.getMonth(),today);
//6 Sat Jul 07 2018 14:45:20 GMT+0800 (中国标准时间) //月份+1

var d = new Date("2018-5-8");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//             年             月份—1       星期几     日期        小时
console.log(d.getTimezoneOffset());//返回格林威治时间和本地时间之间的时差，以分钟为单位。
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
// 2018 4 2 8 0  
// -480
//2018 4 5 11 0
// 2019 5 1 3 0