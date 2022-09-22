/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let case1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let case2 = nums[j];
      if (case1 + case2 === target) {
        return [i, j];
      }
    }
  }
};