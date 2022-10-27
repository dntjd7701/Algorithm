function solution(my_string, num1, num2) {
    let result = [...my_string];
  let c1 = result.splice(num1, 1, '');
  let c2 = result.splice(num2, 1, '');
  result.splice(num1, 1, ...c2);
  result.splice(num2, 1, ...c1);
  return result.join('');
}