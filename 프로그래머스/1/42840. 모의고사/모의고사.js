function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    console.log(p1[i % p1.length]);
    if(answer === p1[i % p1.length]) scores[0]++
    if(answer === p2[i % p2.length]) scores[1]++
    if(answer === p3[i % p3.length]) scores[2]++
  });


  const max = Math.max(...scores);

    
  const result = []; 
  scores.forEach((score, i) => {
    if(score === max) result.push(i + 1); 
  })

  return result; 
}
