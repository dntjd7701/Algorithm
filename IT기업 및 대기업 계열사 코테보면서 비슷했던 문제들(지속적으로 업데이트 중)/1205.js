const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 숫자로 파싱
let [n, newPoint, p] = input[0].split(' ').map(Number);

let arr = [];
if (n > 0 && input[1]) arr = input[1].split(' ').map(Number);

let rank = 1;
for (const score of arr) {
    if (score > newPoint) {
        rank++;
    } else {
        break;
    }
}

// 핵심 판단 (많이 쓰이는 strict(>) 해석 기준으로 구현)
// 1) 리스트가 덜 찼으면 무조건 들어감
// 2) 리스트가 꽉 찼으면 마지막 점수보다 '더 클 때'만 들어감
// 3) 그리고 최종 rank가 p를 넘으면 들어갈 수 없음
if (n < p && rank <= p) {
    console.log(rank);
} else if (n === p && newPoint > arr[p - 1] && rank <= p) {
    console.log(rank);
} else {
    console.log(-1);
}
