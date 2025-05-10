function solution(arr) {
  const result = []; 
  arr.forEach((n, i) => {
    if(arr[i - 1] === n) return; 
    result.push(n)
  })

  return result; 
}