function solution(arr) {
  let answer = [];
  arr.forEach((val, idx) => {
    if (arr[idx - 1] !== val) {
      answer.push(val);
    }
  });
  return answer;
}
