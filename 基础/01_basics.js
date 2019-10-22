"use strict";
//TS基础
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//声明一个字符串变量
var message = 'hello world';
console.log(message);
//TS面向对象编程
//类的声明
var Human = /** @class */ (function () {
    function Human() {
    }
    //类的行为（方法）：void无返回值
    Human.prototype.name = function () {
        console.log('wuhu!');
    };
    return Human;
}());
//实例化
var human1 = new Human();
//调用类的方法
human1.name();
//TS中的数据类型：any、number、string、boolean、数组、元祖、枚举、object、void、null、undefined、never
//any类型：任意类型或者类型不明确的变量
var x = 1;
x = 'I am who I am';
x = false;
//定义任意类型数据的数组
var arrayList = [1, false, 'fine'];
console.log(arrayList[1]);
//null和undefined
//js中允许null 及 undefined赋值给别的数据类型
//ts默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
var n;
console.log(n);
n = 1;
n = null;
n = undefined;
console.log(n);
//元祖
var tuple = [null, 1, false];
console.log('tuple：', tuple);
//枚举
var status_code;
(function (status_code) {
    status_code[status_code["success"] = 200] = "success";
    status_code[status_code["fail"] = 500] = "fail";
    status_code[status_code["error"] = 400] = "error";
})(status_code || (status_code = {}));
var res1 = status_code.success;
var res2 = status_code.fail;
var res3 = status_code.error;
var color2;
(function (color2) {
    color2[color2["red"] = 1] = "red";
    color2["Greed"] = "hwahi";
    color2["Blue"] = "njsab";
})(color2 || (color2 = {}));
var colorName = color2.Blue; //枚举输出： 3
var colorName2 = color2[2]; //枚举输出： Greed
console.log('枚举输出：', colorName, colorName2);
//void：表示无返回值
function fn() {
    console.log('void：fn函数无返回值!');
}
fn();
//指定返回值类型
function fn_returns_value() {
    console.log('fn_return函数返回number类型的数据!');
    return 1;
}
fn_returns_value();
//never类型
/**
 * ts中的 never 是其他类型 （包括 null 和 undefined）的子类型，可以赋值给任何类型，代表从不会出现的值。
 * 但是没有类型是 never 的子类型，这意味着声明 never 的变量只能被 never 类型所赋值。
 */
var nv;
// nv = 1234;//其他类型的数据不能赋值给never类型的变量
//ts中变量的声明
// var [变量名] : [类型] = 值;
var uname = "wuhu";
//注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。
//变量作用域
/**
    全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。

    类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

    局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
 */
var global_num = 12; //全局变量
var numbers = /** @class */ (function () {
    function numbers() {
        this.num_val = 13; //实例变量
    }
    numbers.prototype.store_num = function () {
        var local_num = 14; //局部变量：只能在局部使用
        console.log('局部变量:', local_num);
    };
    numbers.static_val = 10; //静态变量
    return numbers;
}());
console.log('全局变量：', global_num);
var nums = new numbers();
console.log('静态变量：', numbers.static_val);
console.log('实例变量：', nums.num_val);
nums.store_num();
//定义任意类型数据的数组
var list = [1, false, 'fine'];
for (var i in list) {
    console.log(i); //i是下标
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log(item); //item是数组中的元素
}
//ts中如果定义了参数，则必须传入
function build_name1(first_name, last_name) {
    return first_name + last_name;
}
// build_name1('wu');//会报错，提示应传入两个参数
//ts中的可选参数：参数名?:参数类型
function build_name(first_name, last_name) {
    if (last_name) {
        return first_name + last_name;
    }
    else {
        return first_name;
    }
}
build_name('wuhu'); //运行正常，输出 wuhu
//ts中函数参数的默认值
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    return price * rate;
}
var res = calculate_discount(1);
console.log(res); //会输出0.5
//ts：剩余参数，将不确定数量的参数作为一个数组传入
//参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）
function build_name2(first_name) {
    var rest_of_name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest_of_name[_i - 1] = arguments[_i];
    }
    return first_name + ' ' + rest_of_name.join(' ');
}
var employee_name = build_name2('a', 'b', 'c', 'd');
console.log(employee_name);
//Lambda函数：箭头函数
// ( [param1, parma2,…param n] )=>statement;
var foo = function (x) { return x + 10; };
console.log(foo(100));
//函数体是一个语句块
/**
     ( [param1, parma2,…param n] ) => {
         //代码块
    }
 */
var foo1 = function (x) {
    x = x + 10;
    console.log(x);
};
foo1(200);
//如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。
function disp(s1, n1) {
    console.log('s1 = ', s1);
    console.log('n1 = ', n1);
}
//Number:对象，原始数值的包装对象
var num = new Number('1'); // num = 1
//注意：如果传入一个不能转为数字的值则返回NaN(非数字值)
//Number对象属性
var MAX_VALUE = Number.MAX_VALUE; //最大值，接近1.79E+308，大于MAX_VALUE的值代表'Infinity'
var MIN_VALUE = Number.MIN_VALUE; //最小值，即最接近0的正数（实际上不会变成0），最大的负数时-MIN_VALUE，值约为5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。
//NaN：非数字值
//负无穷大：溢出时返回该值。该值小于 MIN_VALUE。
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
//正无穷大：溢出时返回该值。该值大于 MAX_VALUE。
var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
//prototype：Number对象的静态属性。可以向Number对象添加属性和方法
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp1 = new employee(1, 'wuhu');
employee.prototype.email = 'njksd@123.com'; //通过类名.prototype添加成员字段
console.log("员工号: " + emp1.id);
console.log("员工姓名: " + emp1.name);
console.log("员工邮箱: " + emp1.email);
//constructor：返回对创建此对象的 Number 函数的引用。
//Number对象的常用函数
//toFixed();
var num3 = new Number(177.234);
console.log(num3.toFixed()); //177
//toString();
console.log(num3.toString()); //输出十进制，177.34
console.log(num3.toString(2)); //输出二进制 10110001.001110111110011101101100100010110100001110011
console.log(num3.toString(8)); //输出八进制 261.167635544264163
//valueOf()：返回Number对象的原始数字值
console.log(num3.valueOf());
//String:字符串
//constructor“对创建该对象的函数的引用
var str = new String('This is string!');
console.log('str.constructor is：' + str.constructor); //str.constructor is：function String() { [native code] }
//length长度
console.log('length：' + str.length);
//String对象的常用函数
//charAt():返回指定位置的字符
console.log('返回1下标的字符：' + str.charAt(1));
//charCodeAt():返回指定位置字符的Unicode编码
console.log('返回1下标字符的unicode编码：' + str.charCodeAt(1));
//concat():拼接两个字符串并返回新的字符串
var str1 = 'This is concat string';
console.log('拼接字符串：' + str.concat(str1));
//indexOf():查找字符串，并返回首次出现的下标
console.log('查找字符串This首次出现的位置：' + str.indexOf('This'));
//lastIndexOf():查找字符串，并返回最后出现的下标
console.log('查找字符串This首次出现的位置：' + str.lastIndexOf('This'));
//match(reg)，正则匹配，可匹配多个，返回匹配成功的值
var str2 = 'The rain in SPAIN stays mainly in the plain';
var n1 = str2.match(/ain/g);
console.log(n1); //[ 'ain', 'ain', 'ain' ]
//replace(reg,'替换的新字符'):
var reg = /(\w+)\s(\w+)/;
var str3 = 'zara ali';
var newStr = str3.replace(reg, '我是替换的新字符');
console.log('替换后：' + newStr);
//search(reg)：查找与正则匹配的字符，找不到返回-1，找到返回下标
reg = /apples/gi;
str = "Apples are round, and apples are juicy.";
var res_search = str.search(reg);
console.log('search查找的结果：', res_search);
//slice(startIndex,endIndex):截取startIndex到endIndex（不包括endIndex）的子字符串
console.log('slice截取的结果：', str.slice(0, 2));
//split()：将字符串分割成数组
//substr(startIndex,length):截取从startIndex开始length长度的字符
//substring(startIndex,endIndex);截取startIndex到endIndex（不包括endIndex）的子字符串
//toUpperCase();将字符串转化为大写字母
//toLowerCase();将字符串转化为小写字母
// valueOf();返回指定字符串对象的原始值
console.log(str.valueOf());
//Array的构造函数接收两种类型的值，数组大小的值，或者初始化的数组列表，元素使用,分隔
var arr = new Array(4);
console.log('构建指定长度的数组：', arr.length);
var arr_init = new Array("Google", "Runoob", "Taobao", "Facebook");
console.log('构建初始化数组：', arr_init);
//数组解构
arr = [10, 11];
var a1 = arr[0], a2 = arr[1];
console.log('数组解构：', a1, a2);
//多维数组
var multiple_arr = [[1], [2], [3]];
console.log('多维数组:', multiple_arr[0]);
//元祖：如果存储的元素数据类型不同，则需要使用元组。
//元祖常用函数
//pop()移除末尾元素
var mytuple = [10, "Hello", "World", "typeScript", false];
console.log('原元祖：', mytuple);
mytuple.pop();
console.log('移除末尾元素：', mytuple);
// push()添加元素到末尾
mytuple.push(true);
console.log('添加末尾元素：', mytuple);
//解构元祖
var t1 = mytuple[0], t2 = mytuple[1];
console.log('解构元祖：', t1, t2);
//联合类型：可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值
//语法：type1 | type2 | type3
var val;
val = 'wuhu';
val = 1;
console.log(val);
var person = {
    first_name: 'wu',
    last_name: 'hu',
    sayHi: function () { console.log('sayHi...'); }
};
console.log(person.first_name);
console.log(person.last_name);
console.log(person.sayHi());
var drummer = {};
drummer.age = 18;
drummer.instrument = 'Drums';
console.log("年龄:  " + drummer.age);
console.log("喜欢的乐器:  " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2);
//类型断言：有时程序源比编辑器更清楚自己定义的数据类型，可以使用类型断言告诉编辑器数据的类型
var some_value = 'This is a string';
//方法一：
var num1 = some_value.length;
//方法二：
var num2 = some_value.length;
// extends继承
// 注意：子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child1;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child1)); // 多重继承，继承了 Child 和 Root 类
var obj = new Leaf();
obj.str = "hello";
console.log(obj.str);
//重写：
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("父类的 doPrint() 方法。");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // 调用父类的函数
        console.log("子类的 doPrint()方法。");
    };
    return StringPrinter;
}(PrinterClass));
//静态：static 关键字，static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
/**
 * 静态类
 */
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num 值为 " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // 初始化静态变量
StaticMem.disp(); // 调用静态方法
//  instanceof判断对象是否为某个类的实例
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj2 = new Person();
var isPerson = obj2 instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson); //true
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj3 = new AgriLoan(10, 1);
console.log("利润为 : " + obj3.interest + "，抽成为 : " + obj3.rebate);
//Typescript 中的对象必须是特定类型的实例，所以调用的属性或方法必须定义在类型中，作出声明
var human = {
    name: 'wuhu',
    age: 18,
    sayHi: function () { }
};
human.sayHi = function () {
    console.log('hello...I am wuhu...');
};
//命名空间：namespace：解决重名问题
var SomeNameSpaceName;
(function (SomeNameSpaceName) {
    var SomeClassName = /** @class */ (function () {
        function SomeClassName() {
        }
        return SomeClassName;
    }());
    SomeNameSpaceName.SomeClassName = SomeClassName;
})(SomeNameSpaceName || (SomeNameSpaceName = {}));
//访问
SomeNameSpaceName.SomeClassName;
var obj4 = {
    uname: 'mklscm',
    uage: 12,
    sayHi: function () {
        return 'hello...';
    }
};
//泛型：可以支持不特定的数据类型。要求：传入的参数和返回的参数一致。
// T表示泛型，具体什么类型是在调用这个方法的时候决定的
//泛型函数：
function getData(val) {
    return val;
}
console.log(getData(123));
console.log(getData('this is a string text!'));
//泛型类
var minClass = /** @class */ (function () {
    function minClass() {
        this.list = [];
    }
    minClass.prototype.add = function (val) {
        this.list.push(val);
    };
    minClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i_1 = 0; i_1 < this.list.length; i_1++) {
            if (minNum > this.list[i_1]) {
                minNum = this.list[i_1];
            }
        }
        return minNum;
    };
    return minClass;
}());
var m1 = new minClass(); // 实例化类，并且指定了类的 T 代表的类型是 number
m1.add(3);
m1.add(2);
m1.add(23);
console.log(m1.min()); // 2
var m2 = new minClass(); // 实例化类，并且指定了类的 T 代表的类型是 string
m2.add('a');
m2.add('d');
m2.add('f');
console.log(m2.min()); // a
var getData1 = function (value) {
    return value;
};
getData1('abc');
//   getData1(123); // 错误
