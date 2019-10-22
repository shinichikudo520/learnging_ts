//类
//1. 定义
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}
//2. 实例化
let jack = new Animal('jack');
console.log(jack.sayHi());
//3. 类的继承
class Cat extends Animal {
    constructor(name) {
        super(name); //调用父类的constructor(name)函数
        console.log(this.name);
    }
    sayHi() {
        return 'Meow,' + super.sayHi();
    }
}
let cat = new Cat('Tom');
console.log(cat.sayHi());
//4. 存取器
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Name(newName) {
        this.name = newName;
    }
}
let Kitty = new Animal1('Kitty');
Kitty.Name = 'newKitty';
console.log(Kitty.Name); //newKitty
//5. 静态方法：直接通过类名来访问，实例不可访问
class Animal2 {
    static isAnimal(a) {
        return a instanceof Animal2;
    }
}
let a = new Animal2();
console.log('a是不是Animal2类：', Animal2.isAnimal(a));
//6. 访问修饰符：
/**
    public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
    private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
    protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
//6.1 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
class Animal3 {
    constructor(name) {
        this.name = name;
    }
}
//无法扩展类“Animal3”。类构造函数标记为私有。
//  class Cat3 extends Animal3{
//  }
//类“Animal3”的构造函数是私有的，仅可在类声明中访问
// let a = new Animal3('Jack');
//6.2  当构造函数修饰为 protected 时，该类只允许被继承：
class Animal4 {
    constructor(name) {
        this.name = name;
    }
}
class Cat4 extends Animal4 {
    constructor(name) {
        super(name);
    }
}
//类“Animal4”的构造函数是受保护的，仅可在类声明中访问。
// let a = new Animal4('Jack');
//6.3 修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁。
class Animal5 {
    // public name: string;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
//只读属性：readonly
class Animal6 {
    constructor(name) {
        this.name = 'abc';
        this.name = name;
        console.log('readonly属性在构造函数内可修改：', this.name);
    }
}
let a6 = new Animal6('change_readonly_property');
