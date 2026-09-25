///////////////// creating a node (list)
class NodeCreation {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class NodeList {
	constructor(value) {
		this.head = {
			value: value,
			next: null, // when we will call the class then constructor will run and create the very first object. starting point e only head diye start hocche so no 'next' reference and that's why next is null.
		};
		this.tail = this.head; // the first obj will only contain the head which is also a tail.
		this.lenght = 1; // our list length is 1 as we will have only one item when first obj is created.
	}

	append(value) {
		// first create a node
		let newNode = new NodeCreation(value);

		// then referce it correctly
		this.tail.next = newNode; // tail was pointing to head initially. As tail points the last element so we point the new node as tail.
		this.tail = newNode;
		return this;
	}
}

const nodeList1 = new NodeList(10);

/////// create a list of 10-->5-->16
nodeList1.append(5);
nodeList1.append(16);
console.log('singly linked lists', nodeList1);
