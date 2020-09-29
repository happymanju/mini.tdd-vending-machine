// your class here

class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = { 10: 10, 50: 10, 100: 10, 500: 10 };
    this.drinks = {
      A: ["cola", "pepsi", "fanta", "sprite"],
      B: ["monster", "redbull", "rockstar", "charge"],
      C: ["kirin", "sapporo", "asahi", "yebisu"],
      D: ["gin", "vodka", "whiskey", "tequila"],
    };
    this.price = {
      cola: 100,
      pepsi: 100,
      fanta: 100,
      sprite: 100,
      monster: 170,
      redbull: 170,
      rockstar: 190,
      charge: 210,
      kirin: 230,
      sapporo: 250,
      asahi: 10,
      yebisu: 270,
      gin: 530,
      vodka: 470,
      whiskey: 410,
      tequila: 420,
    };
    this.inventory = {
      cola: 10,
      pepsi: 10,
      fanta: 10,
      sprite: 10,
      monster: 10,
      redbull: 10,
      rockstar: 10,
      charge: 10,
      kirin: 10,
      sapporo: 10,
      asahi: 10,
      yebisu: 10,
      gin: 10,
      vodka: 10,
      whiskey: 10,
      tequila: 10,
    };
  }
  insertCoin(coin) {
    for (const property in this.till) {
      if (coin == property) {
        this.till[property] += 1;
        this.balance += coin;
      }
    }
  }

  selectRow(rowNumber) {
    this.row = rowNumber - 1;
    console.log(this.row);
    return this.row;
  }

  selectColumn(columnNumber) {
    this.column = columnNumber;
    if (this.row !== undefined) {
      let product = this.drinks[this.column][this.row];
      let price = this.price[product];
      if (this.balance >= price) {
        console.log(`Row:${this.row}; Column:${this.column}`);
        console.log(`Here is your ${product}`);
        this.balance -= price; //reduce balance
        this.inventory[this.drinks[this.column][this.row]] -= 1; //reduce inventory
        return product;
      } else {
        return "insufficient balance!";
      }
    }
    console.log(`you selected ${this.column}`);
  }

  changeReturn() {
    let coinlist = [10, 50, 100, 500];
    for (let i = coinlist.length - 1; i >= 0; i--) {
      let coinName = coinlist[i];
      if (this.balance >= coinlist[i]) {
        this.till[coinName] -= Math.floor(this.balance / coinName);
        this.balance -= Math.floor(this.balance / coinName) * coinName;
      }
    }
    console.log(this.till);
  }
}

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

module.exports = VendingMachine;
