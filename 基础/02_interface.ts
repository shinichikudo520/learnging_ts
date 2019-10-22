//接口：
interface LabelledValue{
    label:string;
}
function printLabel(labelObj:LabelledValue){
    console.log(labelObj.label);
}
let myObj = {size:10,label:'Size 10 Object'};
//1. 可以传入接口不存在的属性，只要传入的对象满足接口的必要条件，那么它就是被允许的。
// 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
//总结：可以传入多的不存在于接口的属性，且顺序可打乱
printLabel(myObj);

//2. 可选属性：可以让必要属性不写，但是同时禁止了传入多余的属性
interface SquareConfig{
    color?:string,
    width?:number,
}
function createSquare(config:SquareConfig = {color:'white',width:10}):{color:string;area:number}{
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = console.log(createSquare({color:'blackpink'}));
//      不能传入多余的不存在于接口的属性：额外属性检查
// function createSquare1(config:SquareConfig){
//     if(config.abc){ //类型“SquareConfig”上不存在属性“abc”。

//     }
// }
//绕开这些检查的方法：
// ①类型断言
function createSquare1(config:SquareConfig){
}
createSquare1({color:'blackpink',width:20,opacity:0.5} as SquareConfig);
//②索引签名
//索引签名：确定接口可能具有某些做为特殊用途使用的额外属性
//表示的是SquareConfig1可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
interface SquareConfig1{
    color:string,
    width:number,
    [propName:string]:any
}
//③将对象赋值给另一个变量
let squareOptions = { colour: "red", width: 100 };
//因为 squareOptions不会经过额外属性检查，所以编译器不会报错
let mySquare1 = createSquare(squareOptions);

interface Point {
    readonly x : number,
    readonly y : number,
}
//3. 当一个对象声明为接口时，该对象对应接口的属性只能不多不少，一一对应
// let p1 : Point = {x:10,y:20,z:30};//不能将类型“{ x: number; y: number; z: number; }”分配给类型“Point”。对象文字可以只指定已知属性，并且“z”不在类型“Point”中。

//当一个函数的形参声明为接口类型时，如果接口的属性不是可选属性，则传入该形参时，可以传入不属于接口的属性
//如果接口属性是可选属性，则传入该形参时的实参值，不能传入接口不存在的属性：会增加额外属性检查


//当一个类实现一个接口时，可以声明接口不存在的属性

//4. 只读
let p1:Point = {x:10,y:20};
// p1.x = 30;//Cannot assign to 'x' because it is a read-only property.
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

//函数类型的接口
interface searchFunc{
    (source:string,substring:string):boolean;
}
let mySearch:searchFunc;
mySearch = function(source:string,substring:string):boolean{
    let result = source.search(substring);
    return result > -1;
}
//函数的参数名不需要与接口里定义的名字相匹配。 
let mySearch1:searchFunc;
mySearch1 = function(src:string,sub:string){
    let result = src.search(sub);
    return result > -1;
}
//函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。 函数的返回值类型是通过其返回值推断出来的
let mySearch2: searchFunc;
mySearch2 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}




