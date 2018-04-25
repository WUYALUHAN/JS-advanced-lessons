//Javascript基于 ‘__proto__’ 的原型链

// 1.总共三类对象(原型对象，构造函数对象，实例对象）

// 2.实例对象（通过new XX() 所得到的实例），跟原型链相关的只有 __proto__ 属性，指向其对应的原型对象 *.prototype 。

// 3.构造函数对象分原生和自定义两类。跟原型链相关的有 __proto__ 属性，除此之外还有 prototype 属性。
//它们的 __proto__ 属性都是指向 Function.prototype 这个原型对象的。prototype 也是指向对应的原型对象。

// 4.原型对象除了一样拥有 __proto__ 外，也拥有独有的属性 constructor 。
//它的__proto__ 指向的都是 Object.prototype ，除了 Object.prototype 本身，它自己是指向 null 。而 constructor 属性指向它们对应的构造函数对象。

// 5.原型链是基于 __proto__ 的。实例只能通过其对应原型对象的 constructor 才能访问到对应的构造函数对象。
//构造函数只能通过其对应的 prototype 来访问相应的原型对象。