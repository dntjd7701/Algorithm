/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const t = [...strs[0]];
  const commonPrefix = [];

  for (let i = 0; i < t.length; i++) {
    const check = strs.filter((val, idx) => {
      return val.startsWith(t.slice(0, i + 1).join(''));
    });

    if (check.length === strs.length) {
      commonPrefix.push(t.slice(0, i + 1));
    }
  }
  return commonPrefix.length === 0 ? '' : commonPrefix.pop().join('');
};

