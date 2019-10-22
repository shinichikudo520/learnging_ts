//1. 交叉类型
//交叉类型是将多个类型合并为一个类型。 
//这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 
//例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员。
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

//2. 联合类型
/**
 * 
联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
 */
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(f:Fish | Bird): Fish | Bird {
    // ...
    return f;
}
let f:Fish | Bird;
let pet = getSmallPet(f);
pet.layEggs(); // okay
// pet.swim();    // errors

//3. 联合类型和交叉类型的区别
//在不明确 实例变量 真实的类型前
//如果变量是声明的联合类型，则该变量只可以访问联合类型共有的方法
//如果变量是声明的交叉类型，则该变量则可以访问交叉类型中所有类型的方法，不管是不是类型共有
function getSmallPet1(f:Fish & Bird): Fish & Bird {
    // ...
    return f;
}
let f1:Fish & Bird;
let pet1 = getSmallPet1(f1);
pet1.layEggs(); // okay
pet1.swim();    // okay


//4. 类型保护
//pet is Fish就是类型谓词。 谓词为 parameterName is Type这种形式， 
//parameterName必须是来自于当前函数签名里的一个参数名。
//每当使用一些变量调用 isFish时，TypeScript会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的。
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

  




