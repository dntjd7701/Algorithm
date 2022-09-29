/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyDay = 0; //index
  let sellDay = 1;
  let maxProfit = 0;

  // 이전값과 비교할 수 없음.
  while (sellDay < prices.length) {
    if (prices[buyDay] < prices[sellDay]) {
      maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay]);
    } else {
      buyDay = sellDay;
    }
    sellDay++;
  }
  return maxProfit;
};