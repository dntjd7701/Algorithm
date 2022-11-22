function solution(emergency) {
   let originArr = [...emergency];
  emergency.sort((a, b) => b - a);
  return originArr.map((el, idx) => {
    return emergency.findIndex((el2) => el2 === el) + 1;
  });
}