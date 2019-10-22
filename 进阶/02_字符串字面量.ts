//字符串字面量：用来约束取值只能是某几个字符串中的一个
//类型别名与字符串字面量类型都是使用 type 进行定义。
type EventName = 'click' | 'scroll' | 'mousemove';
function handleEvent(el:Element,evnet:EventName){
    //doing something...
}
handleEvent(document.getElementById('hello'),'click');
// handleEvent(document.getElementById('world'),'dbclick');//类型“"dbclick"”的参数不能赋给类型“EventName”的参数。

type a = '1' | 3 | true;
function fn(arg:a):a{
    return arg;
}

fn('1');
// fn('sdcsdc');//error，只能传入'1' | 3 | true三种值
fn(3);
// fn(0);//error
fn(true);
// fn(false);//error




