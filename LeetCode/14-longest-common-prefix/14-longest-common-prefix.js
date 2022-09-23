/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 let minStr = [...strs.find((val) => val.length === Math.min(...strs.map((str) => str.length)))];
  let commonPrefix = '';
  minStr.forEach((val, idx) => {
    if (strs.every((val2, _) => val2.startsWith(minStr.slice(0, idx + 1).join('')))) commonPrefix += val;
  });

  return commonPrefix;
};

