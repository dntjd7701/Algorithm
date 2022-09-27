/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let idx = nums.findIndex((val, idx) => {
    if (!nums.includes(target)) {
      return val > target;
    }
    return val === target;
  });

  return idx === -1 ? nums.length : idx;
};