function solution(a, b) {
if (a === b || a % b === 0 || b === 1) return 1;
  let A = Math.max(a, b);
  let B = Math.min(a, b);
  let r = 1;
  while (B > 0) {
    r = A % B;
    A = B;
    B = r;
  }
  B = b / A;
  console.log('B:', B);

  while (B % 2 === 0) B = B / 2;
  while (B % 5 === 0) B = B / 5;
  return B === 1 ? 1 : 2;
}