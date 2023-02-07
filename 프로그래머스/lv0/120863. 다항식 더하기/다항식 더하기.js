function solution(polynomial) {
let [x, c] = polynomial.split('+').reduce(
    ([a, b], next) => {
      if (next.includes('x')) {
        return [a + +(next.trim().replace('x', '') || 1), b];
      }
      return [a, b + +next];
    },
    [0, 0],
  );
    return !x && !c ? '0' : x && c ? `${x == 1 ? '' : x}x + ${c}` : !x ? c.toString() : `${x == 1 ? '' : x}x`;

}