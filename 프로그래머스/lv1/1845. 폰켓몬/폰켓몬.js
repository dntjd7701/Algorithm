function solution(nums) {
  const maxCnt = nums.length / 2; //수령 가능한 최대 수 
  const uniqueCnt = new Set(nums).size; //중복 제거한 포켓몬 수
  return maxCnt >= uniqueCnt ? uniqueCnt : maxCnt;
}