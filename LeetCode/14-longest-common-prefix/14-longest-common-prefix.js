/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
 const commonPrefix = [];
  [...strs[0]].forEach((_, idx) => {
    if (strs.every((val, __) => val.startsWith([...strs[0]].slice(0, idx + 1).join('')))) {
      commonPrefix.push([...strs[0]].slice(0, idx + 1));
    }
  });
  return commonPrefix.length > 0 ? commonPrefix.pop().join('') : '';
};

