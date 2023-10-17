const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 한 줄씩 입력을 받을 때마다 호출되는 이벤트 핸들러
let answer = '';
rl.on('line', (input) => {
    const regExp = /<[^>]+>|[^<>\s]+/g;
    answer += input.replace(regExp, (match) => {
        return match.startsWith('<') ? match : match.split('').reverse().join('');
    });
    rl.close();
});

// 종료 이벤트 핸들러
rl.on('close', () => {
    console.log(answer); // 마지막의 불필요한 개행 문자를 제거한 후 출력
});