//첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다.
//둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

//첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = +input[0];
const numbers = input[1].split(' ').map(Number);

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < cnt; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(min, max);
