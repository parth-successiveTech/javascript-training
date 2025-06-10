class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }

  deposit(money) {
    this.balance = this.balance + money;
  }
  withdraw(money) {
    this.balance = this.balance - money;
  }
  displayBalance() {
    if (this.balance < 0) {
      console.log("empty balance");
    } else {
      console.log(`your current account balance is ${this.balance}`);
    }
  }
}

const ba = new BankAccount(parseInt(10000), "parth");
ba.deposit(2000);
ba.displayBalance();
