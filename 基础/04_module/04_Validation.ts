module Validation{
    var test;
    console.log(test);
    export interface StringValidator {
        isAcceptable(s: string): boolean;//是否接受.
    }
}