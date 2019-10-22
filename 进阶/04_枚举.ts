//枚举
enum Days {
    Sun = 7,
    Mon = 1,
    Tue = 2,
    Web = 3,
    Thu = 4,
    Fri = 5,
    Sat = 7
}
console.log(Days[7]);//Sat，将Sun覆盖

//枚举本身用于给数字起名字，所以值要求是数字
//  手动赋值 也可以不是数字，使用类型断言让ts无视类型检查
enum Day1 {
    Sun = 7,
    Mon = 1,
    Tue = 2,
    Web = 3,
    Thu = 4,
    Fri = 5,
    Sat = <any>'S'
}
//  或者手动赋值时，所有项都为字符串时，值可以为字符串
enum Day3 {
    Sun = 'Sun',
    Mon = 'Mon',
    Tue = 'Tue',
    Web = 'Web',
    Thu = 'Thu',
    Fri = 'Fri',
    Sat = 'Sat'
}
//可以赋值为负数或者小数，后面的数递增长为1
enum Day2 {
    Sun = -1,
    Mon ,
    Tue = 1.5,
    Web,
    Thu,
    Fri,
    Sat
}
console.log(Day2.Mon,Day2.Web);//0 2.5

//枚举项的两种类型：常数项和计算所得项
//以上都为常数项
//计算所得项
enum Color {
    Red,
    Green,
    Blue = 'blue'.length
};

//如果计算所得项后面的是未手动赋值的项，则会因为无法获得初始值而报错
enum Color1{
    Red = 'Red'.length,
    // Green,//枚举成员必须具有初始化表达式。
}


//常数枚举：不能包含计算成员
//在编译阶段会被删除
const enum Directions{
    Up,
    Down,
    Left,
    Right,
    // middle = ''.length//const enum member initializers can only contain literal values and other computed enum values
}
let directions:number[] = [Directions.Up,Directions.Down,Directions.Left,Directions.Right];
// Directions.Up = 7;//Cannot assign to 'Up' because it is a read-only property.

//外部枚举，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
declare enum Directions_out {
    Up,
    Down,
    Left,
    Right
}
let directions1:number[] = [Directions_out.Up,Directions_out.Down,Directions_out.Left,Directions_out.Right];

//外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
