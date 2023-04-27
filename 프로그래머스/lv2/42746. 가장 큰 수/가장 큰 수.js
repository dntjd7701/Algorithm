function solution(numbers) {
    var answer = numbers.map(String);
    if (answer.every(function (num) { return num.length === 1; })) {
        answer.sort(function (a, b) { return b - a; });
    } else {
        answer.sort(function (a, b) {
            var ab = a + b;
            var ba = b + a;
            return ba.localeCompare(ab);
        });
    }
    answer = answer.join('');
    return answer[0] === '0' ? '0' : answer;
}
