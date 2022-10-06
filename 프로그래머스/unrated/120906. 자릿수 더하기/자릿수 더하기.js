function solution(n) {
    
    return [...String(n)].reduce((acc, curVal, curIdx) => acc+Number(curVal), 0);;
}