function josephusPermutation(N, K) {
  // 초기에 N명의 사람들을 나타내는 배열 생성
  const people = Array.from({ length: N }, (_, index) => index + 1);
  // 결과를 저장할 배열 초기화
  const result = [];
  // 현재 인덱스
  let currentIndex = 0;
  // N명의 사람이 모두 제거될 때까지 반복
  while (people.length > 0) {
    // K번째 사람을 제거하고 결과 배열에 추가
    currentIndex = (currentIndex + K - 1) % people.length;
    result.push(people.splice(currentIndex, 1)[0]);
  }

  return result;
}

// 예시: (7, 3)-요세푸스 순열
const [N,K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((v) => +v);
const result = josephusPermutation(N, K);
console.debug(`<${result.join(', ')}>`);



// let rst = [];
// let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((v) => +v);
// loop(Array.from({length:N}, (_, idx) => idx + 1));
// function loop(circle = []) {
//     if(circle.length === 0) return;
//     let index = (K - 1) % circle.length;
//     rst.push(circle[index]);
//     loop(circle.splice(index + 1).concat(circle.splice(0, index)));
// };

// console.debug(`<${rst.join(', ')}>`);
