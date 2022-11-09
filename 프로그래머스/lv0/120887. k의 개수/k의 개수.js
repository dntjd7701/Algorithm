function solution(i, j, k) {
  let result = 0;
  for (i; i <= j; i++) {
    if (i.toString().split('').includes(k.toString())) {
      result += i
        .toString()
        .split('')
        .filter((el) => el === k.toString()).length;
      console.log(result);
    }
  }
  return result;
}