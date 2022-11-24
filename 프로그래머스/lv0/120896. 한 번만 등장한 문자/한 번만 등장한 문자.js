function solution(s) {
    const cnt = [...s].reduce((a, c) => {
    return a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 };
  }, {});
  return Object.keys(cnt)
    .filter((el) => cnt[el] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join('');
}