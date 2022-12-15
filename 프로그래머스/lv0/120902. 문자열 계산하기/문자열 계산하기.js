function solution(my_string) {
  let arr = my_string.split(' ');
  return +arr.reduce((acc, cur, idx, src) => {
    if (cur === '+') {
      return acc + +src[idx + 1];
    } else if (cur === '-') {
      return acc - +src[idx + 1];
    }
    return acc;
  }, +arr[0]);
}