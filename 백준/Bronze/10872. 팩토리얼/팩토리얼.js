// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

const os = require('os');
// 운영체제 정보 가져오기
const platform = os.platform();

const isLinux = platform === 'linux';

const fs = require('fs')
   .readFileSync(isLinux ? '/dev/stdin' : './test.txt')
   .toString()
   .split(' ');

let input = +fs[0];
let answer = 1;
while (input > 0) {
   answer *= input;
   input--;
}

console.log(answer);
