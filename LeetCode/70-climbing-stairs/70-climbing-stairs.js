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
    result = step1 + step2; 
    step1 = step2; 
    step2 = result; 
  }
  return result;
};