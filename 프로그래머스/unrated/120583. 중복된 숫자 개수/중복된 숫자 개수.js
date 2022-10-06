function solution(array, n) {
    var answer = 0;
    for(el of array){
        if(el === n) answer++;
    }
    return answer;
}