const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const cnt = +input.shift();

const solution = (sentence) => {
    const rst = [];

    for(let i = 0; i < cnt; i++) {
        const temp = sentence[i].split(' ').map((v) => v.split('').reverse().join('')).join(' ');
        rst.push(temp);
    }

    console.log(rst.join('\n'));
};

solution(input)
