const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = fs.split('\n');
const arr = input[1].split(' ').map((v) => +v);
const stack = [];
const NGE = Array(+input[0]).fill(-1); 
//5 7 7 -1
// 시간 복잡도 O(n*n)으로, 메모리 초과 발생. 스택을 활용하여 재풀이
// arr.forEach((num, idx) => {
//     const rightArr = [...arr].splice(idx+1).filter((compareNum) => num < compareNum);
//     answer.push(rightArr?.[0] ?? -1)
// })

// console.debug(answer.join(' '))
arr.forEach((_, idx) => {
    if(idx === 0) {
        stack.push(0); 
        return;
    }
    while(!!stack.length && arr[stack[stack.length - 1]] < arr[idx]) {
        NGE[stack.pop()] = arr[idx];
    }
    stack.push(idx);
})

console.log(NGE.join(' '));
