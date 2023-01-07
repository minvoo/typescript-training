var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("Martin", "Dixon");
console.log("".concat(customer.firstName, " ").concat(customer.lastName));
