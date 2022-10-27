function solution(order) {
    return [...order.toString()].filter((el) => el === '3' || el === '6' || el === '9').length;
  //return order.toString().match(/[3|6|9]/g).length;
}