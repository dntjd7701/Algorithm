function solution(balls, share) {
    return  factorial(balls) / (factorial(balls - share) * factorial(share));

}
function factorial(num) {
  let returnFacotrial = BigInt(1);
  for (let i = num; i >= 2; i--) {
    returnFacotrial *= BigInt(i);
  }
  return returnFacotrial;
}