function solution(sizes) {
   let big = [],
    small = [];
  sizes.forEach((size) => {
    const sorted = size.sort((a, b) => a - b);
    small.push(sorted[0]);
    big.push(sorted[1]);
  });
  return Math.max(...big) * Math.max(...small);
}