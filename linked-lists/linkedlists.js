///////////////// creating a node (list)

// linked list collection of nodes. node e 2ta jinish thake 1. vlaue 2. next node pointer  ; first node ke bola hoy head and last node ke bola hoy tail. Jokhon amar only 1 ta node thaktese tokhon setai head and tail mean korbe
class NodeCreation {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class NodeList {
	constructor(value) {
		if (!value) throw new Error('Must assign a value');
		this.head = {
			value: value,
			next: null, // when we will call the class then constructor will run and create the very first object. starting point e only head diye start hocche so no 'next' reference and that's why next is null. next is basically is an object which will contain the next value and next pointer / null => nex{value:x, next:null}
		};
		this.tail = this.head; // the first obj will only contain the head which is also a tail.
		this.length = 1; // our list length is 1 as we will have only one item when first obj is created.
	}

	// add value to the last
	append(value) {
		// first create a node
		let newNode = new NodeCreation(value);

		// then referce it correctly
		this.tail.next = newNode; // tail was pointing to head initially. As tail points the last element so we point the new node as tail.
		this.tail = newNode;
		this.length++;
		return this;
	}

	// prepend -- add to the begining
	prepend(value) {
		// first create node
		const newNode = new NodeCreation(value);
		// take the value of the previous head
		const prevHead = this.head;

		// then head will be this created node
		this.head = newNode;
		//make the current head point after the head we just created
		this.head.next = prevHead;
		this.length++;
		return this;
	}
	// insert -- for insert we need the index at which position we want to add the new value and the value itself. As we do not have any index in linked list then we have to
	// use a variable for that. We also have to loop and our object is nested so for--in will not work so, we have to use while loop , so that we can loop untill our condition
	// is met. THE core idea is : dhoro amra 2 no index e inset korbo - so amader index 1 e thamte hobe cause 1 er next 2 no index er value ke point korbe and 2 no index er
	// inserted value er next point korbe old index 2 er value ke ---> 10===>69===>5 [dhoro 2 no index e 5 chilo and 1 no index e 10 chilo , AR 69 amra insert korte chacchi]
	insert(index, value) {
		// count index
		let linkedListIndex = 0;

		// loop till current node is not null
		let currentNode = this.head; // cause it is our starting point and we will point next nodes (will be current in that case) through next key

		// loop till before the target index, point to next node (move the nodes)
		while (linkedListIndex < index - 1) {
			// if linkedListIndex is less than index-1  --- then point to next node and increment the index
			// so, index 0 will point 1 here, and if our target index is 2 then next loop will not occur but we got index 1 (next node --> the previous node of index 2)
			currentNode = currentNode.next; // which is the next node object
			linkedListIndex++;
		}
		// now we got our previous node (node before our target index where we are assignig new node)
		// so, first create new node
		const newNode = new NodeCreation(value);
		newNode.next = currentNode.next; // current node (previous node) was pointing to index 2 -for old index it was 5
		currentNode.next = newNode;
		//NOTE: 68 AND 69 NO LINE EXACT EI ORDER EI HOTE HOBE, TA NA HOLE AMRA currentNode.next er value ke overwrite kortam and loss it.
		this.length++;
	}

	// print node values within an array data structur
	printNodes() {
		let nodeArr = [];
		// loop through the values of nodes - and we do not know when to stop exactly so while loop will be used
		// take current object and check next propery and move forward to next nodes
		let currentNode = this.head;
		while (currentNode != null) {
			// the idea is last node's next will point to null --> so, the node coming after the last node is null.
			// do this
			const value = currentNode.value;
			nodeArr.push(value);
			// point to next node
			currentNode = currentNode.next;
		}
		return nodeArr;
	}
}

const nodeList1 = new NodeList(10);

/////// create a list of 10-->5-->16
nodeList1.append(5); // o(1) cause we do not loo something
nodeList1.append(16);
nodeList1.prepend(25); // o(1)
nodeList1.insert(2, 69);
console.log('singly linked lists', nodeList1);
console.log('printNodes arr', nodeList1.printNodes());

//
// linked list collection of nodes. node e 2ta jinish thake 1. vlaue 2. next node pointer  ; first node ke bola hoy head and last node ke bola hoy tail -- basically they are nodes. Jokhon amar only 1 ta node thaktese tokhon setai head and tail mean korbe
// so, akta class amar node create korbe and arekta class node list maintain korbe
