const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

// 반마리만 시킬수는 없다는 전제하에 최대 만큼 계산해주어야한다.

const minChickenCost = ([A, B, C, X, Y]) => {
  // A, B, C -> 가격
  // X, Y -> 수량

  const cost1 = A * X + B * Y;
  const cost2 = Math.max(X, Y) * 2 * C;

  // 섞어서
  const minXY = Math.min(X, Y);
  const cost3 = minXY * 2 * C + (X - minXY) * A + (Y - minXY) * B;

  return Math.min(cost1, cost2, cost3);
};

console.log(minChickenCost(input));
