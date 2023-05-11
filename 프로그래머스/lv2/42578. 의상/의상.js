function solution(clothes) {
    //O(n)
  let clothesMap = new Map(); // Map 객체를 사용하여 의상 종류별 개수를 저장

  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];
    const count = clothesMap.get(type) || 0; // 의상 종류별 개수를 가져오고 없으면 0으로 초기화
    clothesMap.set(type, count + 1); // Map에 개수를 업데이트
  }

  let answer = 1;

  for (let count of clothesMap.values()) {
    answer *= count + 1;
  }

  return answer - 1;
}