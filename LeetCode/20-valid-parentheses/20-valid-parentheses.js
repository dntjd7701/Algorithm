/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [],
    map = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
    
  for (let i = 0; i < s.length ; i++) {
    if (s[i] in map) stack.push(map[s[i]]);
    else if (s[i] === stack.at(-1)) stack.pop();
    else return false;
  }
    
  return !stack.length;
};