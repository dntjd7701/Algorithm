function solution(s) {
    const arr = s.split('');
    return (arr.length === 4 || arr.length === 6) && !arr.some((i) => isNaN(+i))
}
