//泛型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(3, 'x')); //['x','x','x']
//1. 泛型定义
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray1(3, 'x'));
//2. 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven']));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity(7));//类型“7”的参数不能赋给类型“lengthWise”的参数。
//必须传入有length属性的值类型
console.log(loggingIdentity('length'));
// 4. 多个类型参数之间也可以互相约束：
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));
