function solution(bin1, bin2) {
 let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  if (sum === 0) return '0';
  let arr = [];
  while (sum !== 0) {
    arr.push(sum % 2);
    sum = Math.floor(sum / 2);
  }
  return arr.reverse().join('');
}