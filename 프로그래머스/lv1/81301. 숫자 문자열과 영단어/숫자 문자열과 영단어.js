function solution(s) {
 let answer = s;
 let strs = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
    strs.forEach((v, i) => {
         let arr = answer.split(v);
          answer = arr.join(i);
    })
    return +(answer);
}