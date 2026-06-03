////////////// Merge two sorted arrays //////////////

///// TELL ME WHAT BLOCK WILL BE EXECUTED
// const arr = undefined;

// if (!arr) {
// 	console.log(
// 		'this block will run because - !undefined => here undefined is a falsy value which will be converted to false and ! will make it true and execute the block. so, !undefinded => !false => true',
// 	);
// } else {
// 	console.log();
// }

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
		// ! checks if the array is falsy -> so falsy values are - 0, '', null, undefined, false
		// it does not check if it is an arry or not - if we wanted to simply check that then we had to use isArray()
		return 'Please provide valid arrays';
	}

	// index variables for both arrays
	let i = 0;
	let j = 0;
	let merged = [];
	// Run this loop when both array has length
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			// keep the small one -so, arry1tem
			// increment the index
			merged.push(arr1[i]);
			i++;
		} else if (arr1[i] === arr2[j]) {
			// either keep both values or only one values
			// for now we are keeping duplicate values
			merged.push(arr1[i]);
			merged.push(arr2[j]);
			// increment both indexes
			i++;
			j++;
		} else {
			// if arr2 > arr1
			merged.push(arr2[j]);
			j++;
		}
		// array1 item has lenght >= 0
		// same check for 2nd array
	}
	// Run this loop when only one of the two has a lenght
	// this run if only arr1 has length but not arr2
	while (i < arr1.length) {
		merged.push(arr1[i]);
		i++;
	}

	// this run if arr2 has lenght but arr1 has not
	while (i < arr2.length) {
		merged.push(arr2[j]);
		j++;
	}
	return merged;
}

const merge2ndSolution = mergeSortedArr2(arr1, arr2);
console.log('merge sort second - while loop:', merge2ndSolution);

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
