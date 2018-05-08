//日期格式实例
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());
// 1262315543111
// Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
// 2018-05-08T12:59:59.877Z

//日期格式（无时间）
console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));
// Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
// Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));
// 0
// 86400000
// -315532800000
// true
// 86400000
// Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);
//Tue Jun 26 2018 15:06:33 GMT+0800 (中国标准时间)