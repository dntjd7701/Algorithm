function solution(numbers, target) {
  let answer = 0;
  // DFS 사용, LIFO 방식 사용. 
  function dfs(idxCnt, sum) {
    //최종 결과로 모든 수를 다 썼을 때 결과가 나와야 함으로. 
    if(numbers.length === idxCnt) {
        if(target === sum) {
            ++answer;
        }
        return;
    }
    dfs(idxCnt + 1, sum + numbers[idxCnt]);
    dfs(idxCnt + 1, sum - numbers[idxCnt]);
  }

  //최상위 루트, 0, 0부터 시작 
  dfs(0, 0);
  return answer;
}
