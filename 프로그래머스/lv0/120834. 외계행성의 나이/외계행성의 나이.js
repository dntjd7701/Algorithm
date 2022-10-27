function solution(age) {
     return [...age.toString()].map((el) => String.fromCharCode(+el + 97)).join('');

}