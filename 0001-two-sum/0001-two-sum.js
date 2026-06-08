/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function(nums, target) {
    // check if it is an arrary or not 
if (!Array.isArray(nums)) return 'Provide an array' ;

    // loop throught array 
  for (let i = 0; i < nums.length; i++){

    for(let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
    }

  }
    return [];
};
