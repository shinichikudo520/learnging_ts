//枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Web"] = 3] = "Web";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 7] = "Sat";
})(Days || (Days = {}));
console.log(Days[7]); //Sat，将Sun覆盖
//枚举本身用于给数字起名字，所以值要求是数字
//  手动赋值 也可以不是数字，使用类型断言让ts无视类型检查
var Day1;
(function (Day1) {
    Day1[Day1["Sun"] = 7] = "Sun";
    Day1[Day1["Mon"] = 1] = "Mon";
    Day1[Day1["Tue"] = 2] = "Tue";
    Day1[Day1["Web"] = 3] = "Web";
    Day1[Day1["Thu"] = 4] = "Thu";
    Day1[Day1["Fri"] = 5] = "Fri";
    Day1[Day1["Sat"] = 'S'] = "Sat";
})(Day1 || (Day1 = {}));
//可以赋值为负数或者小数，后面的数递增长为1
var Day2;
(function (Day2) {
    Day2[Day2["Sun"] = -1] = "Sun";
    Day2[Day2["Mon"] = 0] = "Mon";
    Day2[Day2["Tue"] = 1.5] = "Tue";
    Day2[Day2["Web"] = 2.5] = "Web";
    Day2[Day2["Thu"] = 3.5] = "Thu";
    Day2[Day2["Fri"] = 4.5] = "Fri";
    Day2[Day2["Sat"] = 5.5] = "Sat";
})(Day2 || (Day2 = {}));
console.log(Day2.Mon, Day2.Web);
