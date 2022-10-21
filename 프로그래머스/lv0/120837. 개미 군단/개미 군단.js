function solution(hp) {
  let answer = 0;
  for (let n of [5, 3]) {
    answer += Math.floor(hp / n);
    hp = hp % n;
  }
  return (answer += hp);
}
