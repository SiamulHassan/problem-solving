// we will be building a dynamic array data sturcture
class DynamicArr {
	constructor(capacity = 4) {
		this.size = 0;
		this.capacity = capacity;
		this.data = new Array(capacity);
	}
	// methods
	push(value) {
		// check capacity
		if (this.size === this.capacity) {
			this.resize(this.capacity * 2);
		}
		// add values
		this.data[this.size] = value;
		this.size++;
	}
	pop() {
		// removed element
		let removedEl = this.data[this.size - 1];
		// removing last ele
		if (this.size < 1) throw new Error('size must be at least 1');
		this.data = delete this.data[this.size - 1];
		return removedEl;
	}

	// shift : adding first element's position
	shift(value) {
		// err handling
		if (this.size < 1) throw new Error('Size must be at least 1');
		// resize if needed
		if (this.size === this.capacity) {
			this.resize(this.capacity * 2);
		}
		// data assignment part
		// first shift elements
		for (let i = this.size; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}
		// now assign the value to the first place of the array
		this.data[0] = value;
		this.size++;
	}

	// insert (in a particular position)
	// Insert element at a specific index
	insert(index, value) {
		if (index < 0 || index > this.size) {
			throw new Error('Invalid index');
		}

		if (this.size === this.capacity) {
			this.resize(this.capacity * 2);
		}

		// Shift elements to the right
		for (let i = this.size; i > index; i--) {
			this.data[i] = this.data[i - 1];
		}

		this.data[index] = value;
		this.size++;
	}

	// update an index value
	update(index, value) {
		if (index < 0 || index > this.size) {
			throw new Error('Invalid index');
		}
		this.data[index] = value;
	}

	// resize method
	resize(newCapacity) {
		// create new array with this capacity
		let newData = new Array(newCapacity);
		// copy old values
		for (let i = 0; i < this.size; i++) {
			newData[i] = this.data[i];
		}
		// increase the capacity variable value
		this.capacity = newCapacity;
		// update data
		this.data = newData;
	}
}

// create array
const array1 = new DynamicArr(4);
console.log('array1:', array1);

// push
array1.push(10);
// array1.push(20);
// array1.push(30);
// array1.push(40);
console.log('array1 values:', array1);
// pop
// const value = array1.pop();
// console.log('err', value);

// shift
const shiftEl = array1.shift(5);
console.log('sifted eleL:', array1);
