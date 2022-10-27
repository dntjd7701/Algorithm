function solution(numbers, direction) {
    if (direction === 'right') {
    const el = numbers.pop();
    numbers.unshift(el);
  } else {
    const el = numbers.shift();
    numbers.push(el);
  }
  return numbers;
}