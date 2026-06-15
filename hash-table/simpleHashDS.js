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
}
const testHash = new HashTable(50);
// console.log('seee hash', testHash._hash('appleeee'));
console.log('set hash', testHash.set('paper', 'nice paper !'));
console.log('get hash', testHash.get('paper'));
