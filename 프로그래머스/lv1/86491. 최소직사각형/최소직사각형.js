function solution(sizes) {
  let big = [],
    small = [];
  sizes.forEach((size) => {
    if (size[0] > size[1]) {
      big.push(size[0]);
      small.push(size[1]);
    } else {
      big.push(size[1]);
      small.push(size[0]);
    }
  });
  return Math.max(...big) * Math.max(...small);
}