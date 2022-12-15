function solution(n) {
 var answer = new Set();
  Loop1: for (let i = 2; i <= n; i++) {
    // 해당 i가 소수인지 판별
    for (let j = 2; j < i; j++) {
      if (j !== i && i % j === 0) continue Loop1;
    }
    while (true) {
      if (n % i === 0) {
        answer.add(i);
        n = n / i;
      } else {
        break;
      }
    }
  }

  return [...answer].sort((a, b) => a - b);
}