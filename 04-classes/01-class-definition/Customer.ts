class Customer {
    
    
    private firstName : string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

    let customer = new Customer("Martin", "Dixon");

    console.log(`${customer.firstName} ${customer.lastName}`);
