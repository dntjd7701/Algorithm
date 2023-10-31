// const input = 'A*(B+C)' // ABC+* 
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input[0]
const stack = [];
let ans = '';
input.split('').forEach((v) => {
    //문자 연결 
    if(v.charCodeAt() >= 65 && v.charCodeAt() <= 90) {
        ans += v;
        return; 
    }
    //표현식 처리 
    if(v === '(') {
        stack.push(v);
    } else if(v ===')') {
        while(stack.length && stack[stack.length - 1] !== '(') {
            ans += stack.pop();
        }
        stack.pop();
    } else if(['*', '/'].includes(v)){
        while(stack.length > 0 && ['*', '/'].includes(stack[stack.length - 1])) {
            ans += stack.pop();
        }
        stack.push(v);
    } else if(['+', '-'].includes(v)) {
        while(stack.length && stack[stack.length - 1] !== '(') {
            ans += stack.pop();
        }
        stack.push(v);
    }
})

while(stack.length) {
    ans += stack.pop();
}
console.debug( ans)
