const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim();

// / c -> 26, d -> 10
const english = 26;
const num = 10;
function countLicensePlatest(pattern) {
  let count = 1;

  for (let i = 0; i < pattern.length; i++) {
    if (i === 0) {
      count *= input[i] === 'c' ? english : num;
    } else {
      if (input[i] === input[i - 1]) {
        count *= input[i] === 'c' ? english - 1 : num - 1;
      } else {
        count *= input[i] === 'c' ? english : num;
      }
    }
  }

  return count;
}

console.log(countLicensePlatest(input));
