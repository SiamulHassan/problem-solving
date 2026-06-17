class HashTable {
	constructor(size) {
		// creates a n sized array which acts like the hash table bucket
		this.data = new Array(size);
	}
	// _ represents a private property ; dev understands that we should not access this outside of this class though it is accessible
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (0 + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	set(key, value) {
		let bucketIndex = this._hash(key);
		if (!this.data[bucketIndex]) {
			this.data[bucketIndex] = [];
			this.data[bucketIndex].push([key, value]);
		} else {
			this.data[bucketIndex].push([key, value]);
		}
		return this.data;
	}
	get(key) {
		let bucketIndex = this._hash(key);
		const bucket = this.data[bucketIndex]; // gives the bucket
		// bucket might be [['a',90],['b',900]] if collision happens, so, one array (the first []), stores two diff key values.
		if (bucket) {
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i][0] === key) return bucket[i][1];
			}
		}
		return undefined;
	}
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.data.length; i++) {
			// this.data => the whole hash table or bucket table
			// this.data[i] => each row of the hash table or each bucket or bucket index (represents individual bucket)
			// if we have bucket then we will loop our buck array to get all the bucket items inside it.[[],[]]

			const bucket = this.data[i]; // each bucket
			if (bucket) {
				for (let j = 0; j < bucket.length; j++) {
					keysArr.push(bucket[j][0]);
				}
			}
		}
		return keysArr;
	}
}
const testHash = new HashTable(20);
testHash.set('paper', 'nice paper !');
testHash.set('apple', 'nice apple !');
testHash.set('pen', 'nice pen !');
testHash.set('book', 'nice book !');
testHash.set('mouse', 'nice mouse !');
console.log('testHash obj', testHash);
console.log('testHash keys', testHash.keys());

// console.log('seee hash', testHash._hash('appleeee'));
// console.log('set hash', testHash.set('paper', 'nice paper !'));
// console.log('get hash', testHash.get('paper'));

/////////////////// find next recurring element

const inputArr = [1, 3, 5, 6, 7, 3, 9, 8];
const containingEl = {};
const findRecurringEl = input => {
	// check
	if (!input || input.length === 0) return;
	for (let i = 0; i < input.length; i++) {
		if (!containingEl[input[i]]) {
			// if not present in the obj then push
			containingEl[i] = input[i];
		} else {
			// if already present then return the element
			return input[i];
		}
	}
	return undefined; 
};

const result = findRecurringEl(inputArr);
console.log('recurrent element :', result);
