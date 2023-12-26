const fs = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let [a, b] = fs;

while (a % b !== 0) {
  let r = a % b;

  // r이 0이 아니라면, a자리에 b를 넣고, b자리에 r을 넣는다.
  if (r !== 0) {
    a = b;
    b = r;
  }
}
4;
console.log([b, (fs[0] * fs[1]) / b].join('\n'));
