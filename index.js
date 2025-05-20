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

// 성능 테스트
const testString = '123456';
const iterations = 1000000;

console.time('정규식');
for (let i = 0; i < iterations; i++) {
  /^\d{4}$|^\d{6}$/.test(testString);
}
console.timeEnd('정규식');

console.time('Number.isInteger');
for (let i = 0; i < iterations; i++) {
  (testString.length === 4 || testString.length === 6) && Number.isInteger(Number(testString));
}
console.timeEnd('Number.isInteger');

console.time('split-some');
for (let i = 0; i < iterations; i++) {
  (testString.length === 4 || testString.length === 6) && !testString.split('').some((i) => isNaN(+i));
}
console.timeEnd('split-some');
