// your class here

//const { use } = require("chai");

//drinks are loaded in test.js
class VendingMachine {
  constructor(useDefaultLoadout = true) {
    this.balance = 0;
    this.till = { 10: 100, 50: 100, 100: 100, 500: 100 };

    this.inventory = {
      A: [],
      B: [],
      C: [],
      D: [],
    };

    if (useDefaultLoadout === true) {
      this.loadDefaultInventory();
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
    return this.column;
  }

  dispense() {
    const drink = this.inventory[this.column][this.row];
    return drink;
  }

  changeReturn() {
    let coinlist = [];
    for (let coinType in this.till) {
      coinlist.push(Number(coinType));
    }
    let change = {};
    let balance = this.balance;
    function returnCoin(balance) {
      if (balance >= 500) {
        change[500] += 1;
        balance -= 500;
        returnCoin(balance);
      } else if (balance >= 100) {
        change[100] += 1;
        balance -= 100;
        returnCoin(balance);
      } else if (balance >= 50) {
        change[50] += 1;
        balance -= 50;
        returnCoin(balance);
      } else if (balance < 50) {
        change[10] += 1;
        balance -= 10;
        returnCoin(balance);
      }
      return;
    }
    returnCoin(balance);
    return change;
  }

  stockDrink(drinkName, setPrice, newAmount) {
    for (let column in this.inventory) {
      if (this.inventory[column].length >= 4) {
        continue;
      }
      this.inventory[column].push({
        name: drinkName,
        price: setPrice,
        stock: newAmount,
      });
      return;
    }
    return;
  }

  loadDefaultInventory() {
    const defaultInventory = [
      { name: "cola", price: 100, stock: 10 },
      { name: "lemonade", price: 110, stock: 10 },
      { name: "orange juice", price: 120, stock: 10 },
      { name: "michael coffee", price: 150, stock: 10 },
      { name: "ryoku-cha", price: 130, stock: 10 },
      { name: "asahi beer", price: 220, stock: 10 },
      { name: "sapporo beer", price: 220, stock: 10 },
      { name: "kirin beer", price: 230, stock: 10 },
      { name: "yebisu beer", price: 290, stock: 10 },
      { name: "Van Michael's Cocoa", price: 570, stock: 10 },
      { name: "peach tea", price: 110, stock: 10 },
      { name: "oolong tea", price: 100, stock: 10 },
      { name: "black tea", price: 100, stock: 10 },
      { name: "drink of the ancient greek gods", price: 990, stock: 10 },
      { name: "is this a drink??", price: 50, stock: 10 },
      { name: "spicy noodle cup", price: 100, stock: 10 },
    ];

    for (let drink of defaultInventory) {
      this.stockDrink(drink.name, drink.price, drink.stock);
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
