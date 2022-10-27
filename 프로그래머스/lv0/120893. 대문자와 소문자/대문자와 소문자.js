function solution(my_string) {
  return [...my_string]
    .map((el) => {
      if (new RegExp(/[A-Z]/).test(el)) {
        return el.toLowerCase();
      }
      return el.toUpperCase();
    })
    .join('');
}