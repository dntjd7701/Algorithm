function solution(my_string) {
  return my_string.replace(/\w/g, (el) => (/[A-Z]/.test(el) ? el.toLowerCase() : el.toUpperCase()));

}