//1. 函数的定义：两种形式
// 命名函数
function add(x, y) {
    return x + y;
}

// 匿名函数
let myAdd = function(x, y) { return x + y; };


//2. 为函数添加类型 
function add1(x: number, y: number): number {
    return x + y;
}

let myAdd1 = function(x: number, y: number): number { return x + y; };


//3. 声明完整的的函数类型
//这种写法，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };


//4. 可选参数和默认参数
//4.1 可选参数：可以在参数名旁使用 ?实现可选参数的功能
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right
//注意：可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let results1 = buildName1("Bob");                  // works correctly now, returns "Bob Smith"
let results2 = buildName1("Bob", undefined);       // still works, also returns "Bob Smith"
// let results3 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
let results4 = buildName1("Bob", "Adams");         // ah, just right
//注意：①与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
//     ②如果传入的是undefined，则相当于没有传入，用户可通过明确的传入 undefined值来获得默认值。



//5. 剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
//剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。


//6. 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// 注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。



















