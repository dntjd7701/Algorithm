function solution(score) {
   const dict = new Object();
  const average = score.map(([a, b]) => (a + b) / 2);
  [...average]
    .sort((a, b) => b - a)
    .forEach((a, i) => {
      if (!dict.hasOwnProperty(a)) dict[a] = i + 1;
    });
  return average.map((el) => dict[el]);
}