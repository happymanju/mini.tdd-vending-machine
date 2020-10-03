const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should have a method for insertCoin", () => {
    const machine = new VendingMachine();
    expect(typeof machine.insertCoin).to.equal("function");
  });

  it("should have a drink inventory"()=>{})

  it("should have a selectRow method", ()=>{
    const machine = new VendingMachine();
    expect(typeof machine.selectRow).to.equal("function");
  })

  it("should have a selectColumn", ()=>{
    const machine = VendingMachine();
    expect(typeof machine.selectColumn).to.equal("function")
  })

  it("should have a starting balance", ()=>{
    const machine = VendingMachine();

    expect(machine.balance).to.equal(0);
  })

  it("should have a starting till, with >0 coin stocks", ()=>{
    const machine = VendingMachine();

    const idealCoinStocks = [10,10,10,10];
    const actualCoinStocks = [];

    for(let coinKey of Object.keys(machine.till)){
      actualCoinStocks.push(machine.till[coinKey])
    }

    expect(machine.till).to.be.true;
    expect(actualCoinStocks).to.equal(idealCoinStocks);
  })

  it("should have a changeReturn method", ()=>{
    const machine = new VendingMachine();
    expect(typeof machine.changeReturn).to.be('function')
  })

  it("should changeReturn after a successful transaction, with leftover balance", ()=>{})

  it("should return an error with insufficient balance", ()=>{})

  it("should return an error if a drink is sold-out", ()=>{})

  it("should return a drink if balance and inventory are sufficient", ()=>{})

  it("should decrement drink inventory on successful transaction", ()=>{})






  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 10,
      50: 10,
      100: 10,
      500: 11,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
});

/* 
1.  _Given_ that the balance is zero, _when_ a coin is inserted, _then_ the balance should rise _and_ types of coins should be stored
1.  _Given_ that no row is selected, _when_ a row is selected the letter should be saved and printed to the console
1.  _Given_ that a row is selected, _when_ there is sufficient balance and inventory and a column is selected
    1.  _then_ the row and column should be logged to the console
    1.  _and_ a message should be logged stating "Here is your [item name]"
    1.  _and_ the item inventory should decrease by 1
    1.  _and_ the correct change should be returned (log type and number of coins to console)
1.  _Given_ that a row and column are selected, _when_ there is no inventory at that column, _then_ an error message should be logged.
1.  _Given_ that a row and column are selected, _when_ the balance is insufficient to purchase the selected item, _then_ an error message should be printed
 */
