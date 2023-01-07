class CustomerProp {


    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    
    constructor(private _firstName: string, private _lastName: string) {
    }
}

let myCustomer = new CustomerProp("Scooby", "Doo");

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);