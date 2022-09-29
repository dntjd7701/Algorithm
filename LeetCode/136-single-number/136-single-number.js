/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     if (nums === null || nums.length <= 2) return nums;
  let storage = new Set();
  // let result;
  while (nums.length > 0) {
    let curEl = nums.shift();
    if (!nums.includes(curEl) && !storage.has(curEl)) {
      return curEl;
    } else {
      storage.add(curEl);
    }
  }
};