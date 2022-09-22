/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let array = [];
  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    nums[queries[i][1]] += queries[i][0];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % 2 === 0) {
        sum += nums[j];
      }
    }
    array.push(sum);
  }

  return array;
};

