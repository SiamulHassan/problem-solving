class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}
	deposit(amount) {
		this.balance += amount;
	}
	getBalance() {
		return this.balance;
	}
}
const account = new BankAccount('Siamul', 1000);
console.log('account object:', account);

account.deposit(500);

console.log('curr balance', account.getBalance());

///// question ans
// What does this refer to inside? [this.balance += amount]
// this refers to the object calling the method.
// If we create two accounts: then they will be refering to different amount as they are completely different independent objects.
// diff between - class BankAccount {} and const account = new BankAccount(); => the first one: This defines a class. Think of it as a reusable structure for creating bank account objects. It doesn't create a bank account instance by itself. but second one
// This creates a new object using the BankAccount class. That object is called an instance.
