/// <reference path='./04_Validation.ts' />
var Validation;
(function (Validation) {
    //匹配A-Z , a-z的英文
    var letterRegexp = /^[A-Za-Z]$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return letterRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
