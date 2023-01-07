class Customer2 {
  private _firstName: string;
  
  
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

let customer2 = new Customer2("John", "Doe");

console.log(`${customer2.firstName} ${customer2.lastName}`);
