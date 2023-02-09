function solution(quiz) {
return quiz.map((el) => {
    const arr = el.split(' ');
    let rst = '';
    console.log(+arr[0] - +arr[2] === +arr[4]);
    if (arr[1] === '-') {
      rst = +arr[0] - +arr[2] === +arr[4] ? 'O' : 'X';
    } else {
      rst = +arr[0] + +arr[2] === +arr[4] ? 'O' : 'X';
    }
    return rst;
  });
}