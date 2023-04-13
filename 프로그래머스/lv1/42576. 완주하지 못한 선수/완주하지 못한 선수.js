function solution(participant, completion) {
  let map = new Map();

  // 각 참가자의 동명이인 수를 계산
  participant.forEach((p) => {
    map.set(p, map.get(p) ? map.get(p) + 1 : 1);
  });
    

  // 완주자의 배열을 순환하여 map에 존재하지 않을 경우, 존재하나 동명이인이 존재할 경우를 계산하여 처리
  for (let c of completion) {
    if (!map.has(c)) return c;
    if (map.get(c) === 1) {
      map.delete(c);
    } else {
      map.set(c, map.get(c) - 1);
    }
  }
  return map.keys().next().value;
}