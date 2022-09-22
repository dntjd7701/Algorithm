/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 return x === +Array.from(x.toString()).reverse().join('');
};