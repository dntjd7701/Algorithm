const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [num, expression, ...nums] = fs;
const stack = [];
const obj = {};
let ASCII = 65;
const calc = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '/': (a,b) => a/b,
    '*': (a,b) => a*b,
}

nums.forEach((v) => {
    const alphabet = String.fromCharCode(ASCII++);
    obj[alphabet] = v
})

expression.split('').forEach((v) => {
    if(Object.keys(calc).includes(v)) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(calc[v](a,b));
        return;
    }
    stack.push(+obj[v]);
});

console.log((Math.floor(stack.pop() * 100) / 100).toFixed(2))
