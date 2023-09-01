const arr = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 주어지는 명령어의 수
const orderCnt = +arr[0];

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

/**
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
 */
const solution = (arr) => {
  const stack = [];
  const answer = [];
  for (let i = 1; i <= orderCnt; i++) {
    const order = arr[i].split(' ');
    switch (order[0]) {
      case 'push':
        stack.push(+order[1]);
        break;
      case 'pop':
        if (stack.length === 0) {
          answer.push(-1);
        } else {
          answer.push(+stack.pop());
        }
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case 'top':
        answer.push(stack.length === 0 ? -1 : +stack[stack.length - 1]);
        break;
      default:
        break;
    }
  }

  console.log(answer.join('\n'))
};

solution(arr);
