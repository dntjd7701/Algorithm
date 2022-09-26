/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if (nums.length === 0) return nums;
  let changed = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - count] === nums[i]) {
      nums[i] = '_';
      changed++;
      count++;
    } else {
      count = 1;
    }
  }
  nums.sort();

  console.log(nums);
  for (let i = 0; i < changed; i++) {
    nums.pop();
  }

  nums.sort((a, b) => a - b);
  return nums.length;
};