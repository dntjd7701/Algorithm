const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => +v);
// const input = [8, 4, 3, 6, 8, 7, 5, 2, 1]
// const input = [5, 1, 2, 5, 3, 4]
const iter = input.shift();
const stack = [];
let iterCnt = 1;
let answer = [];

for(let i = 0; i < iter; i++) {
    const targetNum = input[i];
    while(iterCnt <= targetNum) {
        stack.push(iterCnt);
        iterCnt++;
        answer.push('+');
    }

    const stackPop = stack.pop();
    answer.push('-');

    if(stackPop !== targetNum) {
        answer = ['NO'];
        break;
    }
}

console.log(answer.join('\n'));