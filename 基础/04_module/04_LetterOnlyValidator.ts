/// <reference path='./04_Validation.ts' />
module Validation {
    //匹配A-Z , a-z的英文
    var letterRegexp = /^[A-Za-Z]$/;
    export class LettersOnlyValidator implements StringValidator{
        isAcceptable(s:string){
            return letterRegexp.test(s);
        }
    }
}