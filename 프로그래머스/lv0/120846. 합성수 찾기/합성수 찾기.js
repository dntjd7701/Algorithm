function solution(n) {
 if (n <= 3) {
    return 0;
  }
  let arr = Array(n).fill(false);
  for (let i = 4; i <= n; i++) {
    // i는 검사 대상이 된다.
    // 소수인지 합성수인지.
    // 이제부터 방향을 정하자,
    // [1] 합성수인 수만 골라 반환한다.
    // [2] 전체에서 소수를 제외하고 남은 수를 반환한다.
    // 여기에선 소수를 제외하고 작업을 해보자

    for (let j = 2; j <= Number(i ** 0.5); j++) {
      if (i % j === 0) {
        arr[i - 1] = true;
      }
    }
  }
  return arr.filter((el) => el === true).length;
}