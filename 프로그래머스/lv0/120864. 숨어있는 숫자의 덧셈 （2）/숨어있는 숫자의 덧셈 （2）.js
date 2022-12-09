function solution(my_string) {
      const newString = my_string
    .replace(/[a-z,A-Z]/g, '/')
    .split('/')
    .filter((el) => el !== '');
  if (newString.length === 0) return 0;
  return +newString.reduce((acc, cur) => +acc + +cur);
}