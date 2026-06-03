////////////// Merge two sorted arrays //////////////

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

// simplest solution
const mergeSortedArrays = (arr1, arr2) => {
	const sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
	return sortedArr;
};
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray);

// solution 2

function mergeSortedArr2(arr1, arr2) {
	// check inputs
	if (!arr1 || !arr2) {
		return 'Please provide valid arrays';
	}

	// index variables for both arrays
	let i = 0;
	let j = 0;
	const merged = [];
	// loop (while)
}
mergeSortedArr2(arr1, arr2);

/////////// Reverse a string ///////////

const string = 'My cat is cute and I love to play with her';

function reverseString(str) {
	// checck
	if (!str || str.length <= 2 || typeof str !== 'string')
		return 'Please provide a string';
	// loop through from last index to first
	const reversed = []; // O(n) space complexity
	for (let i = str.length - 1; i >= 0; i--) {
		// O(n) time complexity
		// here what is happening is - the letters are coming from the last and if we have no letter (white space) then it will be '' in the array. ex: ['a', 'f', '','e']
		reversed.push(str[i]);
	}
	return reversed.join(''); // O(n) time complexity to join the array into a string
}

const reversedString = reverseString(string);
console.log(reversedString);

//// if we want to do a clean approach
const clean1 = str => str.split('').reverse().join('');
const clean2 = str => [...str].reverse().join('');

////////////////////// Important Note //////////////////////
// For reversing a string, you cannot do better than O(n) time.

// Why? Because you must look at every character at least once. If the string has n characters, reversing it requires touching all n characters.
