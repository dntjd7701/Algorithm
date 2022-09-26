/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     if (!nums.includes(val)) nums;
  nums.forEach((el, idx) => {
    if (el === val) {
      nums.splice(idx, 1);
      removeElement(nums, val);
    }
  });

  return nums.length;
};