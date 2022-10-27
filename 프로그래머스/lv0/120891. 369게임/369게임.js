function solution(order) {
     return [...order.toString()].filter((el) => el === '3' || el === '6' || el === '9').length;

}