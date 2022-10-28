function solution(n) {
  return (
    ((a, b) => {
      let leastCommonMultiple = 1;
      while (!(leastCommonMultiple % a === 0 && leastCommonMultiple % b === 0)) ++leastCommonMultiple;
      return leastCommonMultiple;
    })(n, 6) / 6
  );
}