class Customer {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setFirstName(firstName : string): void{
    this.firstName = firstName;
  }

  public setLastName(lastname: string) : void {
    this.lastName = lastname;
  }
}

let customer = new Customer("Martin", "Dixon");

console.log(`${customer.getFirstName()} ${customer.getLastName()}`);
