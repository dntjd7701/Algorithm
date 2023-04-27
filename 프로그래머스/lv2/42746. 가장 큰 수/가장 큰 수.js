function solution(numbers) {
    
  let nums = numbers.map(String);
  if (nums.every((n) => n.length === 1)) {
    nums.sort((a, b) => b - a);
  } else {
    nums.sort((a, b) => {
      return b + a - (a + b);
    });
  }
  return nums[0] === '0' ? '0' : nums.join('');
}
