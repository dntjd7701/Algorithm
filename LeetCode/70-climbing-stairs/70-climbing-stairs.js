/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) return n;
  let step1 = 1;
  let step2 = 2;
  let result;
  for (let i = 3; i <= n; i++) {
    result = step1 + step2; //3 5 8 13 21
    step1 = step2; // 2 3 5 8
    step2 = result; //3 5 8 13
  }
  return result;
};