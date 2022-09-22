/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
let result = 0;
  let romanToNumsArray = Array.from(s).map((el) => {
    switch (el) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
    }
  });
  romanToNumsArray.forEach((el, idx) => {
    if (romanToNumsArray[idx] < romanToNumsArray[idx + 1]) {
      result -= romanToNumsArray[idx];
    } else {
      result += romanToNumsArray[idx];
    }
  });
  return result;
  return result;
};