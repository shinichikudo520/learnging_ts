//1. 反向映射
//除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
//要注意的是 不会为字符串枚举成员生成反向映射。

enum Enum1 {
    A = 'a',
}
console.log(Enum1.A);//a
console.log(Enum1['A']);//a
console.log(Enum1['a']);//undefined