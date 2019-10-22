//symbol：原生的一种数据类型
//特点：唯一且不可变
//1. 定义
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
let sym3 = Symbol("key");
console.log(sym1, sym2, sym3); //Symbol() Symbol(key) Symbol(key)
console.log(sym2 === sym3); // false, symbols是唯一的
//symbol可以作为对象属性的键key
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj['sym']); // "value"
