//TS基础

//声明一个字符串变量
var message:string = 'hello world';
console.log(message);

//TS面向对象编程
//类的声明
class Human{
    //类的行为（方法）：void无返回值
    name():void{
        console.log('wuhu!');
    }
}
//实例化
var human1 = new Human();
//调用类的方法
human1.name();

//TS中的数据类型：any、number、string、boolean、数组、元祖、枚举、object、void、null、undefined、never
//any类型：任意类型或者类型不明确的变量
let x:any = 1;
x = 'I am who I am';
x = false;
//定义任意类型数据的数组
let arrayList:any[] = [1,false,'fine'];
console.log(arrayList[1]);

//null和undefined
//js中允许null 及 undefined赋值给别的数据类型
//ts默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
let n:number;
console.log(n);
n = 1;
n = null;
n = undefined;
console.log(n);

//元祖
let tuple:[string,number,boolean] = [null,1,false];
console.log('tuple：',tuple);

//枚举
enum status_code{
    success = 200,
    fail = 500,
    error = 400
}
let res1:status_code = status_code.success;
let res2:status_code = status_code.fail;
let res3:status_code = status_code.error;
//用键做索引  返回值，用值做索引返回键
//索引为字符串则通过'.'的方式访问，索引为数字则用'[]'的方式访问
enum color2{
    red = 1,
    Greed,
    Blue
}
let colorName:number = color2.Blue;//枚举输出： 3
let colorName2:string = color2[2];//枚举输出： Greed
console.log('枚举输出：',colorName,colorName2);

//void：表示无返回值
function fn():void{
    console.log('void：fn函数无返回值!');
}
fn();
//指定返回值类型
function fn_returns_value():number{
    console.log('fn_return函数返回number类型的数据!');
    return 1;
}
fn_returns_value();

//never类型
/**
 * ts中的 never 是其他类型 （包括 null 和 undefined）的子类型，可以赋值给任何类型，代表从不会出现的值。
 * 但是没有类型是 never 的子类型，这意味着声明 never 的变量只能被 never 类型所赋值。
 */
let nv:never;
// nv = 1234;//其他类型的数据不能赋值给never类型的变量


//ts中变量的声明
// var [变量名] : [类型] = 值;
var uname:string = "wuhu";
//注意：变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。

//变量作用域
/**
    全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。

    类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

    局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
 */
var global_num:number = 12;//全局变量
class numbers{
    num_val = 13;//实例变量
    static static_val = 10;//静态变量
    store_num():void{
        var local_num = 14;//局部变量：只能在局部使用
        console.log('局部变量:',local_num);
    }
}
console.log('全局变量：',global_num);
var nums = new numbers();
console.log('静态变量：',numbers.static_val);
console.log('实例变量：',nums.num_val);
nums.store_num();

//定义任意类型数据的数组
let list:any[] = [1,false,'fine'];
for(var i in list){
    console.log(i);//i是下标
}
for(var item of list){
    console.log(item);//item是数组中的元素
}


//ts中如果定义了参数，则必须传入
function build_name1(first_name:string,last_name:string):string{
    return first_name + last_name;
}
// build_name1('wu');//会报错，提示应传入两个参数
//ts中的可选参数：参数名?:参数类型
function build_name(first_name:string,last_name?:string):string{
    if(last_name){
        return first_name + last_name;
    }else{
        return first_name;
    }
}
build_name('wuhu');//运行正常，输出 wuhu
//ts中函数参数的默认值
function calculate_discount(price:number,rate:number = 0.5){
    return price * rate;
}
var res = calculate_discount(1);
console.log(res);//会输出0.5
//ts：剩余参数，将不确定数量的参数作为一个数组传入
//参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）
function build_name2(first_name:string,...rest_of_name:string[]):string{
    return first_name + ' ' + rest_of_name.join(' ');
}
var employee_name = build_name2('a','b','c','d');
console.log(employee_name);

//Lambda函数：箭头函数
// ( [param1, parma2,…param n] )=>statement;
var foo = (x:number) => x + 10;
console.log(foo(100));
//函数体是一个语句块
/**
     ( [param1, parma2,…param n] ) => {
         //代码块
    }
 */
var foo1 = (x:number) => {
    x = x + 10;
    console.log(x);
}
foo1(200);

//函数重载：函数名相同，而参数不同，可能参数类型不同、参数个数不同、参数顺序不同
function disp(s1:string):void;
function disp(s1:string,n1:number):void;
//如果参数类型不同，则参数类型应设置为 any。
// 参数数量不同你可以将不同的参数设置为可选。
function disp(s1:any,n1?:any):void{
    console.log('s1 = ',s1);
    console.log('n1 = ',n1);
}

//Number:对象，原始数值的包装对象
var num = new Number('1');// num = 1
//注意：如果传入一个不能转为数字的值则返回NaN(非数字值)
//Number对象属性
var MAX_VALUE = Number.MAX_VALUE;//最大值，接近1.79E+308，大于MAX_VALUE的值代表'Infinity'
var MIN_VALUE = Number.MIN_VALUE;//最小值，即最接近0的正数（实际上不会变成0），最大的负数时-MIN_VALUE，值约为5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。
//NaN：非数字值
//负无穷大：溢出时返回该值。该值小于 MIN_VALUE。
var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
//正无穷大：溢出时返回该值。该值大于 MAX_VALUE。
var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
//prototype：Number对象的静态属性。可以向Number对象添加属性和方法
function employee(id:number,name:string){
    this.id = id;
    this.name = name;
}
var emp1 = new employee(1,'wuhu');
employee.prototype.email = 'njksd@123.com';//通过类名.prototype添加成员字段
console.log("员工号: "+emp1.id) 
console.log("员工姓名: "+emp1.name) 
console.log("员工邮箱: "+emp1.email)
//constructor：返回对创建此对象的 Number 函数的引用。

//Number对象的常用函数
//toFixed();
var num3 = new Number(177.234);
console.log(num3.toFixed());//177
//toString();
console.log(num3.toString());//输出十进制，177.34
console.log(num3.toString(2));//输出二进制 10110001.001110111110011101101100100010110100001110011
console.log(num3.toString(8));//输出八进制 261.167635544264163
//valueOf()：返回Number对象的原始数字值
console.log(num3.valueOf());

//String:字符串
//constructor“对创建该对象的函数的引用
var str = new String('This is string!');
console.log('str.constructor is：'+str.constructor);//str.constructor is：function String() { [native code] }
//length长度
console.log('length：'+str.length);

//String对象的常用函数
//charAt():返回指定位置的字符
console.log('返回1下标的字符：'+str.charAt(1));
//charCodeAt():返回指定位置字符的Unicode编码
console.log('返回1下标字符的unicode编码：'+str.charCodeAt(1));
//concat():拼接两个字符串并返回新的字符串
var str1 = 'This is concat string';
console.log('拼接字符串：'+str.concat(str1));
//indexOf():查找字符串，并返回首次出现的下标
console.log('查找字符串This首次出现的位置：'+str.indexOf('This'));
//lastIndexOf():查找字符串，并返回最后出现的下标
console.log('查找字符串This首次出现的位置：'+str.lastIndexOf('This'));
//match(reg)，正则匹配，可匹配多个，返回匹配成功的值
var str2 = 'The rain in SPAIN stays mainly in the plain';
var n1 = str2.match(/ain/g);
console.log(n1);//[ 'ain', 'ain', 'ain' ]
//replace(reg,'替换的新字符'):
var reg = /(\w+)\s(\w+)/;
var str3 = 'zara ali';
var newStr = str3.replace(reg,'我是替换的新字符');
console.log('替换后：' + newStr);
//search(reg)：查找与正则匹配的字符，找不到返回-1，找到返回下标
reg = /apples/gi; 
str = "Apples are round, and apples are juicy.";
var res_search = str.search(reg);
console.log('search查找的结果：',res_search);
//slice(startIndex,endIndex):截取startIndex到endIndex（不包括endIndex）的子字符串
console.log('slice截取的结果：',str.slice(0,2));
//split()：将字符串分割成数组
//substr(startIndex,length):截取从startIndex开始length长度的字符
//substring(startIndex,endIndex);截取startIndex到endIndex（不包括endIndex）的子字符串
//toUpperCase();将字符串转化为大写字母
//toLowerCase();将字符串转化为小写字母
// valueOf();返回指定字符串对象的原始值
console.log(str.valueOf());

//Array的构造函数接收两种类型的值，数组大小的值，或者初始化的数组列表，元素使用,分隔
var arr = new Array(4);
console.log('构建指定长度的数组：',arr.length);
var arr_init = new Array("Google","Runoob","Taobao","Facebook");
console.log('构建初始化数组：',arr_init);
//数组解构
arr = [10,11];
var [a1,a2] = arr;
console.log('数组解构：',a1,a2);
//多维数组
var multiple_arr:number[][] = [[1],[2],[3]];
console.log('多维数组:',multiple_arr[0]);

//元祖：如果存储的元素数据类型不同，则需要使用元组。
//元祖常用函数
//pop()移除末尾元素
var mytuple = [10,"Hello","World","typeScript",false];
console.log('原元祖：',mytuple);
mytuple.pop();
console.log('移除末尾元素：',mytuple);
// push()添加元素到末尾
mytuple.push(true);
console.log('添加末尾元素：',mytuple);
//解构元祖
var [t1,t2] = mytuple;
console.log('解构元祖：',t1,t2);

//联合类型：可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值
//语法：type1 | type2 | type3
var val:string | number;
val = 'wuhu';
val = 1;
console.log(val);

//interface接口：一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现
interface IPerson{
    first_name:string;
    last_name:string;
    sayHi:()=>void//不能写成sayHi:():void=>{}
}
var person:IPerson = {
    first_name:'wu',
    last_name:'hu',
    sayHi:():void=>{console.log('sayHi...')}
}
console.log(person.first_name);
console.log(person.last_name);
console.log(person.sayHi());
//需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分

//接口继承：extends
//单继承：Child_interface_name extends super_interface_name
//多继承：Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
//接口没有实例：
interface Person { 
    age:number 
}
interface Musician extends Person { 
    instrument:string 
} 
var drummer = <Musician>{};
drummer.age = 18;
drummer.instrument = 'Drums';
console.log("年龄:  "+drummer.age);
console.log("喜欢的乐器:  "+drummer.instrument);
interface IParent1 { 
    v1:number 
} 
interface IParent2 { 
    v2:number 
} 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2);

//类型断言：有时程序源比编辑器更清楚自己定义的数据类型，可以使用类型断言告诉编辑器数据的类型
let some_value:any = 'This is a string';
//方法一：
let num1:number = (<string>some_value).length;
//方法二：
let num2:number = (some_value as string).length;

//非空断言：
// document.getElementById("pre-loading")!.remove();
// 告诉浏览器，一定有这个DOM，不要再报错了



//readonly：修饰成员变量，只读，只能在初始化或者在构造函数中赋值操作
interface IFace{
    readonly uname?:string,
    readonly uage?:number,
    // sayHi:(name:string,age:number)=>string,
    sayHi():string
}

// extends继承
// 注意：子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承
class Root { 
    str:string; 
 } 
  
 class Child1 extends Root {} 
 class Leaf extends Child1 {} // 多重继承，继承了 Child 和 Root 类
  
 var obj = new Leaf(); 
 obj.str ="hello" 
 console.log(obj.str);

 //重写：
 class PrinterClass { 
    doPrint():void {
       console.log("父类的 doPrint() 方法。") 
    } 
 } 
  
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() // 调用父类的函数
       console.log("子类的 doPrint()方法。")
    } 
 }


 //静态：static 关键字，static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
 /**
  * 静态类
  */
 class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("num 值为 "+ StaticMem.num) 
    } 
 } 
  
 StaticMem.num = 12     // 初始化静态变量
 StaticMem.disp()       // 调用静态方法


//  instanceof判断对象是否为某个类的实例
class Person{ } 
var obj2 = new Person() 
var isPerson = obj2 instanceof Person; 
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);//true

//访问修饰符
/*
 public（默认） : 公有，可以在任何地方被访问。

 protected : 受保护，可以被其自身以及其子类和父类访问。

 private : 私有，只能被其定义所在的类访问。
 */


 //类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用
 interface ILoan { 
    interest:number 
 } 
  
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj3 = new AgriLoan(10,1) 
 console.log("利润为 : "+obj3.interest+"，抽成为 : "+obj3.rebate );


 //Typescript 中的对象必须是特定类型的实例，所以调用的属性或方法必须定义在类型中，作出声明
var human = {
    name:'wuhu',
    age:18,
    sayHi:function(){},//类型模板
}
human.sayHi = function(){
    console.log('hello...I am wuhu...');
}


//命名空间：namespace：解决重名问题
namespace SomeNameSpaceName { 
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
 }
 //访问
 SomeNameSpaceName.SomeClassName;
 //如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
 /// <reference path = "SomeFileName.ts" />

 //模块
//  export 导出
// import 导入
import IFace = require('./someInterface');
var obj4:IFace = {
    uname:'mklscm',
    uage:12,
    sayHi():string{
        return 'hello...';
    }
};


//泛型：可以支持不特定的数据类型。要求：传入的参数和返回的参数一致。
// T表示泛型，具体什么类型是在调用这个方法的时候决定的
//泛型函数：
function getData<T>(val:T):T{
    return val;
}
console.log(getData<number>(123));
console.log(getData<string>('this is a string text!'));

//泛型类
class minClass<T> {
    list:T[] = [];
  
    add (val:T):void {
      this.list.push(val);
    }
  
    min ():T {
      let minNum = this.list[0];
      for(let i = 0; i < this.list.length; i++) {
        if(minNum > this.list[i]){
            minNum = this.list[i];
        }
      }
      return minNum;
    }
  }
  let m1 = new minClass<number>(); // 实例化类，并且指定了类的 T 代表的类型是 number
  m1.add(3);
  m1.add(2);
  m1.add(23);
  console.log(m1.min()); // 2
  
  let m2 = new minClass<string>(); // 实例化类，并且指定了类的 T 代表的类型是 string
  m2.add('a');
  m2.add('d');
  m2.add('f');
  console.log(m2.min()); // a


  //泛型函数
  interface configFn<T> {
    (val:T):T;
  }
  let getData1:configFn<string> = function<T> (value:T):T {
    return value;
  }
  getData1('abc');
//   getData1(123); // 错误





























