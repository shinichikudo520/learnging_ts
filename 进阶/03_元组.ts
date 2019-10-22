//元组

//1. 定义元组
let tom:[string,number] = ['Tom',24];
console.log(typeof tom);//object

//2. 元组：读
let tom_zero:string = tom[0];


//3. 元组：写
tom[1] = 25;

// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
// tom = ['tom'];//Property '1' is missing in type '[string]' but required in type '[string, number]'.


// 越界元素：当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
tom.push('student');
tom.push(23);
// tom.push(true);//类型“true”的参数不能赋给类型“string | number”的参数
