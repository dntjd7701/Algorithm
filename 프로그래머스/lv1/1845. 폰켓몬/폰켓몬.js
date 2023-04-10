function solution(nums) {
   const selectCount = nums.length / 2;
  const uniqueSet = new Set(nums); // 중복 제거한 Set 자료구조
  const uniqueCount = uniqueSet.size; // 중복 제거한 폰켓몬 종류의 수

  return uniqueCount <= selectCount ? uniqueCount : selectCount;
}