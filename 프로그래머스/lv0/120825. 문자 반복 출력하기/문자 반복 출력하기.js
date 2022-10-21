function solution(my_string, n) {
  let result = [];
  for (let w of [...my_string]) {
    let word = '';
    for (let i = 0; i < n; i++) {
      word += w;
    }
    result.push(word);
  }
  return result.join('');
}