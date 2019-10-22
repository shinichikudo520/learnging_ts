//1. 参数属性：
//在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
//在构造函数内将参数作出声明，相对于在类中声明一个属性
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

//2. 抽象类
/**
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 
 * abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 */

abstract class Animal {
    abstract makeSound(): void;// 必须在派生类中实现
    move(): void {
        console.log('roaming the earch...');
    }
}
//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 
class AccountingDepartment extends Animal {
    //必须在派生类中实现抽象基类的抽象方法
    makeSound(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
}
//允许创建一个对抽象类型的引用
let department: Animal; // 允许创建一个对抽象类型的引用























