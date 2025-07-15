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

/// Given two arrays, write a function that let's the user know if the two arrays contain any common elements. returns true if they do, false otherwise.

//////////////////////////// Naive Solution ////////////////////////////
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7];

const containsCommonElements = (arr1, arr2) => {
  arr1.forEach((ele) => {
    arr2.forEach((ele2) => {
      if (ele === ele2) {
        console.log(`Common element found: ${ele}`);
        return true;
      } else {
        return false;
      }
    });
  });
};
// Big O (a*b) not n2 ==< casue 2 diff input

containsCommonElements(arr1, arr2);

//////////////////////////// Optimized Solution ////////////////////////////
const containCommonItems2 = (arr1, arr2) => {
  // loop through the first array and create an object which length === the items of the array
  const convertedObject = {};
  arr1.forEach((item) => {
    if (!convertedObject[item]) {
      convertedObject[item] = true;
    } else {
      console.log(`Common element found: ${item}`);
      return true; // early return if common item is found
    }
    console.log(convertedObject);
  });
  // then loop through the second array and check if the object contains the item
  arr2.forEach((item) => {
    if (convertedObject[item]) {
      // common item found
      console.log("conveted obj has item:", item);
      return true;
    }
    return false; // no common item found
  });
};
containCommonItems2(arr1, arr2);
// O (a+b)
