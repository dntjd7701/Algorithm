function solution(n) {
   let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    // 1 * 1
    // 1 * 2
    // 1 * 2 * 3
    // 1 * 2 * 3 * 4
    if (factorial >= n) {
      return factorial === n ? i : i - 1;
    }
  }
}