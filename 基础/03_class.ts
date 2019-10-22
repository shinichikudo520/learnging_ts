//类
class Employee1 {
    fullName:string;
}
var employee = new Employee1();
employee.fullName = 'Long long';

if(employee.fullName){
    console.log(employee.fullName);
}

//constructor：构造函数
class UserInfo1{
    userName:string;
    //构造方法
    constructor(msg:string){
        this.userName = msg;
    }
    getUserInfo(){
        return '欢迎您， ' + this.userName;
    }
}
function printMsg1():string{
    var resMsg:string = '';
    var g = new UserInfo1('龙梅子');
    resMsg = g.getUserInfo();
    return resMsg;
}
console.log('printMsg1():',printMsg1());


//super：调用父类
class Person1{
    userName:string;
    constructor(paramVal:string){
        this.userName = paramVal;
    }
    getPersonInfo(age:number = 120):string{
        return this.userName + '\n' + age;
    }
}
class Student1 extends Person1{
    constructor(userName:string){
        super(userName);//调用父类的构造函数
    }
    getPersonInfo(age = 100){
        var superMsg = super.getPersonInfo(age);//super关键字相对于父类的类名，Person
        return this.userName + '\n' + age + '岁' + '\n\t\t' + '默认信息：' + superMsg;
    }
}
class Student2 extends Person1{
    constructor(userName:string){
        super(userName);
    }
    getPersonInfo(age = 120){
        var superMsg = super.getPersonInfo(age);
        return this.userName + '\n' + age + '岁' + '\n\t\t' + '默认信息：' + superMsg; 
    }
}

var stu1 = new Student1('周伯通');
console.log('stu1：',stu1.getPersonInfo());
var stu2 = new Student2('黄老邪');
console.log('stu2：',stu2.getPersonInfo(80));

//private 私有的  public 公有的
class MyAnimal {
    private name:string;
    constructor(private theName : string){
        this.name = theName;
    }
    getMsg(name:string):string{
        return this.name = name;
    }
}
//犀牛
class Rhino extends MyAnimal {
    constructor(){
        super('犀牛');
    }
    getMsg(name : string):string{
        return name;
    }
}
//员工
class Employees{
    private name:string;
    constructor(theName:string){
        this.name = theName;
    }
}
var animal = new MyAnimal('山羊');//山羊
var resMsg1 = animal.getMsg('鹿');//山羊 => 鹿
var rhino = new Rhino();//犀牛
var Employees1 = new Employees('洪七公');//洪七公
animal = rhino; //山羊 => 犀牛
console.log('private：' + resMsg1);//鹿

 





