const fs = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const obj = {
  A: fs[0],
  B: fs[1],
  C: fs[2],
  '×': '*',
};

const questions = [
  '(A+B)%C',
  '((A%C) + (B%C))%C',
  '(A×B)%C',
  '((A%C) × (B%C))%C',
];

const calc = (expression) => {
  try {
    return new Function(`return ${expression}`)();
  } catch (error) {
    return 'Error';
  }
};

console.log(
  questions
    .map((v) => {
      return v
        .split('')
        .map((w) => (!!obj?.[w] ? obj[w] : w))
        .join('');
    })
    .map((v) => calc(v))
    .join('\n')
);
