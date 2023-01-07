var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer.prototype.setLastName = function (lastname) {
        this.lastName = lastname;
    };
    return Customer;
}());
var customer = new Customer("Martin", "Dixon");
console.log("".concat(customer.getFirstName(), " ").concat(customer.getLastName()));
