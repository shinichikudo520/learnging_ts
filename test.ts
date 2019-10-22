interface a{
    (string):string,
    (number):number
}
let x:a = function<T>(x:T):T{
    return x;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let arr:ReadonlyStringArray = ['x','y'];
// arr[2] = 'z';


let x1 = 3;//类型推断为number类型
// x1 = 'sdnjk';

