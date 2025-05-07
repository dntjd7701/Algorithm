function solution(answers) {
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0]; 

  answers.forEach((answer, i) => {
    if (answer === pattern1[i % pattern1.length]) score[0]++;
    if (answer === pattern2[i % pattern2.length]) score[1]++;
    if (answer === pattern3[i % pattern3.length]) score[2]++;
  });

  const maxScore = Math.max(...score);

  const result = [];
  score.forEach((s, i) => {
    if (s === maxScore) result.push(i + 1);
  });

  return result;
}
