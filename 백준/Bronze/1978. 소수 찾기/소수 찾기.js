// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다
const fs = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [ n, nums ] = [ fs[0], fs[1].trim().split(' ') ];

function s() {
  const primeArr = [];
  // 자, 범위는 수의 개수 N~100, 소수의 범위는 0~1000
  // 소수는 나눠지는 수가 1과 자기 자신밖에 없는거지. 
  // 그러니깐. max는 자기 자신이 되는거고, 2부터 시작해서 나눠지는 수가 자기자신 하나만 있는지 확인하면 돼. 
  for(let i = 0; i < n; i++) {
    let count = 1; 
    const targetNum = +nums[i];
    for(let j = 2; j <= targetNum; j++) {
      if(targetNum % j === 0) {
        
        ++count;
      }
    }
    if(count === 2) {
      primeArr.push(targetNum)
    }
  } 
  
  return primeArr;
}

console.debug( s().length)
