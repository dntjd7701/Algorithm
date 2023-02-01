function solution(A, B) {
  let arr = [...A];
  for (let i = 0; i < A.length; i++) {
    if (arr.join('') === B) return i;
    arr.unshift(arr.pop());
  } 
  return -1;
}