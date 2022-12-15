function solution(my_str, n) {
  let [prev, cur,arr] = [0, n, []];
  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    arr.push(my_str.slice(prev, cur));
    [prev, cur] = [cur, cur + n];
  }
  return my_str.length === n ? [my_str] : n === 1 ? [...my_str] : arr;
}