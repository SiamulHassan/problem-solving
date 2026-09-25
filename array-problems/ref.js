class DynamicArray {
	constructor(capacity = 4) {
		if (capacity < 1) {
			throw new Error('Capacity must be at least 1');
		}

		this.capacity = capacity;
		this.size = 0;

		this.data = new Array(this.capacity);
	}

	// Access an element
	get(index) {
		this.checkIndex(index);

		return this.data[index];
	}

	// Update an element
	set(index, value) {
		this.checkIndex(index);

		this.data[index] = value;
	}

	// Add element at the end
	push(value) {
		if (this.size === this.capacity) {
			this.resize(this.capacity * 2);
		}

		this.data[this.size] = value;
		this.size++;
	}

	// Remove last element
	pop() {
		if (this.size === 0) {
			return undefined;
		}

		const lastIndex = this.size - 1;
		const value = this.data[lastIndex];

		this.data[lastIndex] = undefined;
		this.size--;

		this.shrinkIfNeeded();

		return value;
	}

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

	// Remove element from a specific index
	remove(index) {
		this.checkIndex(index);

		const removedValue = this.data[index];

		// Shift elements to the left
		for (let i = index; i < this.size - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		this.size--;

		this.data[this.size] = undefined;

		this.shrinkIfNeeded();

		return removedValue;
	}

	// Resize the internal array
	resize(newCapacity) {
		const newData = new Array(newCapacity);

		for (let i = 0; i < this.size; i++) {
			newData[i] = this.data[i];
		}

		this.data = newData;
		this.capacity = newCapacity;
	}

	// Shrink when the array is using 25% or less
	shrinkIfNeeded() {
		if (this.capacity > 4 && this.size <= this.capacity / 4) {
			this.resize(Math.max(4, Math.floor(this.capacity / 2)));
		}
	}

	// Check index for existing elements
	checkIndex(index) {
		if (index < 0 || index >= this.size) {
			throw new Error('Invalid index');
		}
	}

	// Check if empty
	isEmpty() {
		return this.size === 0;
	}

	// Return number of stored elements
	getSize() {
		return this.size;
	}

	// Return allocated capacity
	getCapacity() {
		return this.capacity;
	}

	// Display stored elements
	print() {
		console.log(this.data.slice(0, this.size));
	}
}
