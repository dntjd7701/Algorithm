function solution(my_string) {
    let answer = [];
  [...my_string].forEach((el) => {
    if (!answer.includes(el)) {
      answer.push(el);
    }
  });
  return answer.join('');
}