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
  for (let i = 0; i < romanToNumsArray.length; i++) {
    if (romanToNumsArray[i] < romanToNumsArray[i + 1]) {
      result -= romanToNumsArray[i];
    } else {
      result += romanToNumsArray[i];
    }
  }
  return result;
};