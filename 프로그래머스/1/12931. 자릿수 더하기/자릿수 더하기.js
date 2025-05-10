function solution(n) {
    
    return [...String(n)].reduce((acc, cur) => acc + +cur, 0)
}