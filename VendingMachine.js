// your class here


//drinks are loaded in test.js
class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = { 10: 100, 50: 100, 100: 100, 500: 100 };
    this.cola = {name : "cola", price : 100, stock : 10};
    this.lemonade = {name : "lemonade", price : 110, stock : 10};
    this.orangeJuice = {name : "orange juice", price : 120, stock : 10};
    this.coffee = {name : "michael coffee", price : 150, stock : 10};
    this.greenTea = {name : "ryoku-cha", price : 130, stock : 10};
    this.asahi = {name : "asahi beer", price : 220, stock : 10};
    this.sapporo = {name : "sapporo beer", price : 220, stock : 10};
    this.kirin = {name : "kirin beer", price : 230, stock : 10};
    this.yebisu = {name : "yebisu beer", price : 290, stock : 10};
    this.cocoa = {name : "Van Michael's Cocoa", price : 570, stock : 10};
    this.peachTea = {name : "peach tea", price : 110, stock : 10};
    this.oolongTea = {name : "oolong tea", price : 100, stock : 10};
    this.blackTea = {name : "black tea", price : 100, stock : 10};
    this.ambrosia = {name : "drink of the ancient greek gods", price : 990, stock : 10};
    this.mystery = {name : "is this a drink??", price : 50, stock : 10};
    this.cupNoodle = {name : "spicy noodle cup", price : 100, stock : 10};

    this.inventory = {
      A : [];
      B : [];
      C : [];
      D : [];
    }
    

    
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
    return this.row;
  }

  selectColumn(columnLetter) {
    this.column = columnLetter;
    return this.column
  }

  dispense() {
    if (this.row && this.column) {
      if (this.inventory[this.column][this.row].price > this.balance) {
        return "insufficient balance";
      } else if (this.inventory[this.column][this.row] === 0) {
          return "sold out";
        } else {
          const drink = this.inventory[this.column][this.row];
          console.log(`Here is your ${drink.name}`);
          drink.stock -= 1;
          this.balance -= drink.price;
          if (this.balance > 0) {
            changeReturn();
          }
          return drink;
        }
      }
    }
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

  stockDrink(drinkName, setPrice, newAmount){
    for (let column in this.inventory){
      if (this.inventory[column].length >= 4) {
        continue;
      }
      this.inventory[column].push({name : drinkName, price : setPrice, stock : newAmount});
      return;
    }
    return;

  }
}


/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

module.exports = VendingMachine;
