// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//   let storage = [];
//   while (nums.length > 0) {
//     let curEl = nums.shift();
//     if (!nums.includes(curEl) && !storage.includes(curEl)) {
//       return curEl;
//     } else {
//       storage.push(curEl);
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let num = 0
 for(let i=0; i<nums.length; i++){
     num = num ^ nums[i];
 }
    return num;
};