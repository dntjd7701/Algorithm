const fs = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(+(fs[0] + fs[1]) + +(fs[2] + fs[3]));