const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should have a method for insertCoin", () => {
    const machine = new VendingMachine();
    expect(typeof machine.insertCoin).to.equal("function");
  });

  it("should have a drink inventory", () => {
    const machine = new VendingMachine();
    expect(typeof machine.inventory["A"][0]).to.equal("object");
  });

  it("should have a selectRow method", () => {
    const machine = new VendingMachine();
    expect(typeof machine.selectRow).to.equal("function");
  });

  it("should have a selectColumn method", () => {
    const machine = new VendingMachine();
    expect(typeof machine.selectColumn).to.equal("function");
  });

  it("should have a starting balance", () => {
    const machine = new VendingMachine();

    expect(machine.balance).to.equal(0);
  });

  it("should have a starting till, with >0 coin stocks", () => {
    const machine = new VendingMachine();

    const idealCoinStocks = [100, 100, 100, 100];
    const actualCoinStocks = [];

    for (let coinKey of Object.keys(machine.till)) {
      actualCoinStocks.push(machine.till[coinKey]);
    }
    expect(actualCoinStocks).to.deep.equal(idealCoinStocks);
  });

  it("should have a changeReturn method", () => {
    const machine = new VendingMachine();
    expect(typeof machine.changeReturn).to.equal("function");
  });

  it("should return a drink object with a sufficient balance", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.selectRow(1);
    machine.selectColumn("A");
    const drink = machine.dispense();
    expect(drink.name).to.equal("cola");
  });

  it("should return the correct change", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.balance -= 100;
    let change = machine.changeReturn();
    const expectedChange = { 500: 0, 100: 4, 50: 0, 10: 0 };
    expect(change).to.deep.equal(expectedChange);
  });

  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 100,
      50: 100,
      100: 100,
      500: 101,
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
