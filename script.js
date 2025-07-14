// log all pairs of elements in an array

const elements = [1, 2, 3, 4, 5];

const logAllPairs = () => {
	elements.forEach((ele, index) => {
		elements.forEach((ele2, index2) => {
			if (index <= index2) {
				console.log(`Pair: ${ele}, ${ele2}`);
			}
		});
	});
};

logAllPairs(elements);

// checking git status