function solution(quiz) {
 return quiz.map((el) => {
    const [expression, compare] = el.split('=');
    return eval(expression) === +compare ? 'O' : 'X';
  });
}