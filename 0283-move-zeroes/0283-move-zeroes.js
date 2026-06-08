/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // [0,2,5,0,6,0,8]
const moveZeroes = function (nums) {
	let indexToWrite = 0;

    // loop through non 0 values and write accordingly
    for(let readIndex = 0; readIndex < nums.length; readIndex++){
        if(nums[readIndex] !== 0) {
          nums[indexToWrite] = nums[readIndex];
          indexToWrite++;
        }
    } 

    // we know how many elements we wrote and know the total elemens (let's say 4 wrote and 7 total elements so, rest will be zeros and we will start to write from where we stopped - means the indexToWrite which is from index 4) 
    for(let i = indexToWrite; i < nums.length; i++){
        nums[i] = 0;
    }
};