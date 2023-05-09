function solution(n, computers) {
    var answer = 0;
    let ch = Array.from({length:n}, ()=>0);

    function DFS(L){
        ch[L]=1;

        for(let i=0;i<n;i++){
            if(computers[L][i]===1 && !ch[i]){
                DFS(i);
            }
        }
    }

    for(let i=0;i<n;i++){
        if(!ch[i]){
            DFS(i);
            answer++;
        }
    }
    return answer;
}