"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEx = void 0;
var CustomerEx = /** @class */ (function () {
    function CustomerEx(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerEx.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerEx.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerEx;
}());
exports.CustomerEx = CustomerEx;
