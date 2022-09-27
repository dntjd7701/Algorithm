/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     if (n === 1) return n;

  let array = [];

  for (let i = 2; i <= n; i++) {
    if (i === 2 || i === 3) {
      array.push(i);
    } else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }

  return array.pop();
};