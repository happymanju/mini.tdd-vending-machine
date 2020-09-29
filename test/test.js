const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should have a method for insertCoin", () => {
    const machine = new VendingMachine();
    expect(typeof machine.insertCoin).to.equal("function");
  });

  it("should have a beginning balance of 0 and till should be initialized to 10 for all coins", () => {
    const machine = new VendingMachine();
    expect(machine.balance).to.equal(0);
    expect(machine.till[10]).to.equal(10);
    expect(machine.till[50]).to.equal(10);
    expect(machine.till[100]).to.equal(10);
    expect(machine.till[500]).to.equal(10);
  });

  it("should have a method for selecting a row", () => {
    const machine = new VendingMachine();
    expect(typeof machine.selectRow).to.equal("function");
  });

  it("should return the correct row using selectRow", () => {
    const machine = new VendingMachine();
    const row = machine.selectRow(2);
    expect(row).to.equal(1);
  });

  it("should have a method for selecting a column", () => {
    const machine = new VendingMachine();
    expect(typeof machine.selectColumn).to.equal("function");
  });

  it("should return the correct column using selectColumn", () => {
    const machine = new VendingMachine();
    machine.selectColumn("A");
    expect(machine.column).to.equal("A");
  });

  it("should return correct drink and correct balance if the balance is sufficient", () => {
    const machine = new VendingMachine();
    machine.insertCoin(100);
    machine.selectRow(1);
    expect(machine.selectColumn("A")).to.equal("cola");
    expect(machine.balance).to.equal(0);
    expect(machine.inventory["cola"]).to.equal(9);
  });

  it("should have the correct till after transaction and changeReturn", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.selectRow(3);
    machine.selectColumn("B");
    machine.changeReturn();
    let correctTill =
      machine.till[10] === 9 &&
      machine.till[50] === 10 &&
      machine.till[100] === 7 &&
      machine.till[500] === 11;
    expect(correctTill).to.equal(true);
    expect(machine.balance).to.equal(0);
  });

  it("should reset the balance to zero using change return", () => {
    const machine = new VendingMachine();
    machine.insertCoin(500);
    machine.changeReturn();
    expect(machine.balance).to.equal(0);
  });

  it("should have correct till balance after transaction", () => {
    const machine = new VendingMachine();

    machine.insertCoin(100);
    machine.insertCoin(100);
    machine.changeReturn();
    expect(machine.till[100]).to.equal(10);
  });

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
