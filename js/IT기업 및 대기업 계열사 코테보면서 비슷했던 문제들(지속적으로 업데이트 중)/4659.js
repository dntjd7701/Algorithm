/**
 * 1. 모음이 무조권 하나 포함되어야 한다. 
 * 2. 모음이 3개 혹은 자음이 3개 연속으로 오면 안된다. 
 * 3. 같은 글자의 반복은 제외X, 단. ee,oo 는 예외로써 허용한다. 
 * 4. 패스워드는 대문자를 포함하지 않는다. 
 * 
 * 1 <= password <= 20 
 */

const fs = require('fs');
const passwordList = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const passwordList = fs.readFileSync('./index.txt').toString().trim().split('\n');

/**
 * 모음. 그 외의 것은 자음으로 처리한다. 
 */
const vowel = ['a', 'e', 'i', 'o', 'u'];

function validate(password) {
    let hasVowel = false;
    let vowelCnt = 0;
    let consonantCnt = 0;

    for (let i = 0; i < password.length; i++) {
        if (vowel.includes(password[i])) {
            hasVowel = true;
            vowelCnt++;
            // 초기화 
            consonantCnt = 0;
        } else {
            // 초기화 
            vowelCnt = 0;
            consonantCnt++;
        }

        if (vowelCnt === 3 || consonantCnt === 3) {
            return false;
        }

        if (i > 0 && password[i] === password[i - 1] && !['e', 'o'].includes(password[i])) {
            return false;
        }
    }

    return hasVowel;
}


for (let i = 0; i < passwordList.length; i++) {
    const pw = passwordList[i];
    if (pw === 'end') {
        break;
    }

    if (validate(pw)) {
        console.log(`<${pw}> is acceptable.`)
    } else {
        console.log(`<${pw}> is not acceptable.`)
    }
}
