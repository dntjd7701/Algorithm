function solution(array, n) {
let result = array.filter((el) => {
    return Math.abs(el - n) === Math.min(...array.map((el) => Math.abs(el - n)));
  });
  return result.length !== 1 ? Math.min(...result) : result[0];
}