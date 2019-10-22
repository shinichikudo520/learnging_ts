/// <reference path='./04_module/04_Validation.ts' />
/// <reference path='./04_module/04_ZipCodeValidator.ts' />
/// <reference path='./04_module/04_LetterOnlyValidator.ts' />

/**
 * Splitting Across Files 分割跨文件
 */

 //声明一个数组
 var strings = ['Hello','98052','101'];

 //使用验证
 var validators:{[s:string]:Validation.StringValidator} = {};
 validators['Zip Code'] = new Validation.ZipCodeValidator();//验证长度为5并且为数字
 validators['Letters only'] = new Validation.LettersOnlyValidator();//验证是否为字母
 function showMsg1():void{
     //显示每个字符串是否通过每个验证
     strings.forEach( s => {
         for(var key in validators){
            console.log('"' + s + '"' + (validators[key].isAcceptable(s)?' matches ':' does not match ') + key);
         }//--for--end!
     } );//--foreach--end!
 }
showMsg1();
