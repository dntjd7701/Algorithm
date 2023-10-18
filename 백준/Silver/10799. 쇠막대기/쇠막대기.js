const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// 막대
let sticks = [];

// 쪼개진 개수
let num = 0;

for(let i = 0; i < input.length; i++){
    let str = input[i];
    // 레이저
    if(str === "(" && input[i + 1] === ")"){
        // 레이저가 발사되면 stick의 개수만큼 잘려나가기 때문에 sticks.length만큼 num을 증가시킨다.
        num += sticks.length;
        
        // "()" 문자를 하나의 레이저로 보기 때문에, ")" 문자의 다음 문자로 넘어가기 위해 미리 i를 증가시켜놓는다.
        i++;
    } else if(str === "("){
        // "(" 문자를 만나면 막대의 시작이기 때문에 sticks에 넣어준다.
        sticks.push(str);
    } else {
        // ")" 문자를 만나면 막대의 끝이기 때문에 sticks에서 빼준다.
        sticks.pop();
        
        // 끝 부분은 쪼개진 마지막 조각으로 나오기 때문에 num을 증가시킨다.
        // 예를들어, 하나의 막대에 레이저가 2번 떨어지면 총 3개로 쪼개지는데
        // 앞서 짤린 2개의 조각은 각각 레이저 분기문에서 num에 추가가 되지만, 마지막 하나는 처리되지 않고 남아있다.
        // ")" 문자를 만나면 그 땐 더 이상 레이저에 의한 효과는 없다고 판단하고 num에 넣어주는 것이다.
        num++;
    }
}

console.log(num);