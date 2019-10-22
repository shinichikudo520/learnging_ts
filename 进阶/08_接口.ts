//1. 接口定义：
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//2. 可选属性：会增加额外属性检查
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

//2.1 额外属性检查
function createSquare1(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare1 = createSquare({ colour: "red", width: 100 });//会报错




//3. 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// 3.1  readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。


//4. 函数类型的接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//5. 可索引的类型： 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
interface stringArray{
    [index:number]:string
}
let myArray:stringArray;
myArray = ['x','y'];
let myStr:string = myArray[0];
//5.1 数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
//正确：数字索引的返回值必须是字符串索引返回值类型的子类型
interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与字符串索引类型返回值的类型不匹配，即string不是number的子类型
}

//5.2 只读  索引签名
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let arr:ReadonlyStringArray = ['x','y'];
// arr[2] = 'z';//类型“ReadonlyStringArray”中的索引签名仅允许读取。

//6. 实现接口
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
//6.1 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
interface ClockConstructor {
    new (hour: number, minute: number);
}
//这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
//所以在实力部分中没有检查到接口的实现，所以报错
// class Clock1 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }



//7. 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
//7.1 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square1 = <Square>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;


//8. 混合类型：一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


//9. 接口继承类：
/**
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
 * 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。
 * 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
 * 这个接口类型只能被这个类或其子类所实现（implement）。
 */

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。,SelectableControl接口只能被Control子类实现
// class Image implements SelectableControl {
//     select() { }
// }
/**
 * 在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 实际上， SelectableControl接口和拥有select方法的Control类是一样的。 Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。
 */



















