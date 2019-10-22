//泛型

function createArray(length:number,value:any):Array<any>{
    let result = [];
    for(let i = 0;i < length;i++){
        result[i] = value;
    }
    return result;
}
console.log(createArray(3,'x'));//['x','x','x']

//1. 泛型定义
function createArray1<T>(length:number,value:T):Array<T>{
    let result:T[] = [];
    for(let i = 0;i < length;i++){
        result[i] = value;
    }
    return result;
}

console.log(createArray1<string>(3,'x'));


//2. 多个类型参数
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
console.log(swap([7,'seven']));


//3. 泛型约束
interface lengthWise{
    length:number
}
function loggingIdentity<T extends lengthWise>(arg:T):T{
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity(7));//类型“7”的参数不能赋给类型“lengthWise”的参数。
//必须传入有length属性的值类型
console.log(loggingIdentity('length'));

// 4. 多个类型参数之间也可以互相约束：
//其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(copyFields(x, { b: 10, d: 20 }));


//泛型接口：
interface createArrayFunc<T>{
    (length:number,value:T):Array<T>
}
let createArray2:createArrayFunc<number>;
createArray2 = function(length:number,value){
    let result = [];
    for(let i = 0;i < length; i++){
        result[i] = value;
    }
    return result;
}

//泛型类：
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型参数的默认类型
function createArray4<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

