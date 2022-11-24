function solution(bin1, bin2) {
 // let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
 //  if (sum === 0) return '0';
 //  let arr = [];
 //  while (sum !== 0) {
 //    arr.push(sum % 2);
 //    sum = Math.floor(sum / 2);
 //  }
 //  return arr.reverse().join('');
    
    let sum = 0;
  [...bin1].reverse().forEach((el, idx) => {
    if (el === '0') return;
    if (idx === 0) {
      sum += 1;
      return;
    }
    let value = 1;
    for (let i = 0; i < idx; i++) {
      value *= 2;
    }
    sum += value;
  });

  [...bin2].reverse().forEach((el, idx) => {
    if (el === '0') return;
    if (idx === 0) {
      sum += 1;
      return;
    }
    let value = 1;
    for (let i = 0; i < idx; i++) {
      value *= 2;
    }
    sum += value;
  });

  if (sum === 0) return '0';

  let arr = [];
  while (sum > 0) {
    arr.push(sum % 2);
    sum = Math.floor(sum / 2);
  }
  return arr.reverse().join('');
}