// https://www.acmicpc.net/problem/10828
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 주어지는 명령어의 수
const orderCnt = +input.shift();

const solution = (order) => {
  const stack = [];
  const answer = [];
  for (let i = 0; i < orderCnt; i++) {
    switch (order[i]) {
      case 'pop': answer.push(stack.length === 0 ? -1 : +stack.pop()); break;
      case 'size': answer.push(stack.length); break;
      case 'empty': answer.push(stack.length === 0 ? 1 : 0); break;
      case 'top': answer.push(stack.length === 0 ? -1 : +stack[stack.length - 1]); break;
      default: stack.push(+order[i].split(' ')[1]); break;
    }
  }
  console.log(answer.join('\n'));
};

solution(input);
