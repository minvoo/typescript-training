"use strict";
var CustomerProp = /** @class */ (function () {
    function CustomerProp(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerProp.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerProp.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerProp;
}());
var myCustomer = new CustomerProp("Scooby", "Doo");
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
