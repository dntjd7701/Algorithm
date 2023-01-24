function solution(s) {
   const arr = s.split(' ');
  let result = 0;

  while (true) {
          if (arr.length === 0) break;
    const el = arr.pop();
    if (el === 'Z') {
      arr.pop();
      continue;
    }
    result += +el;

  }

  return result;
}