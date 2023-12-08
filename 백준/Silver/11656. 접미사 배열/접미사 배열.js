const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const suffix = [];
while(fs.length > 0) {
    suffix.push(fs.join(''));
    fs.shift();
}

console.log(suffix.sort().join('\n'));