export class Ingredient {
  /*public name: string;
  public amount: number;*/

  /*constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }*/

  // NOTE:
  //  In TypeScript you can simply
  //  shortcut by using the Public accessor
  //  in the constructor declaration
  constructor(public name: string, public amount: number) {}

}
