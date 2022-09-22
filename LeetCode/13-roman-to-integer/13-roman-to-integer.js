/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
 const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return [...s].reduce((prev, cur, idx, Array) => (prev += (dictionary[cur] < dictionary[Array[idx + 1]] ?? 0 ? -1 : 1) * dictionary[cur]), 0)
};