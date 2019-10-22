//1. 反向映射
//除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
//要注意的是 不会为字符串枚举成员生成反向映射。
var Enum1;
(function (Enum1) {
    Enum1["A"] = "a";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.A);
console.log(Enum1['A']);
console.log(Enum1['a']);
