/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
   if (nums.length === 2 && (nums[0] + nums[1]) % 2 !== 0) return nums;

  let odds = [];
  let evens = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      odds.push(nums[i]);
    } else {
      evens.push(nums[i]);
    }
  }

  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      result.push(odds.shift());
    } else {
      result.push(evens.shift());
    }
  }
  return result;
};