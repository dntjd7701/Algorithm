
const fs = require('fs');
const input = fs
   .readFileSync('/dev/stdin')
   .toString()
   .trim()
   .split('\n')
   .map(Number);

const maxN = Math.max(...input);
const isPrime = Array(maxN + 1).fill(true); // 소수 여부를 저장하는 배열

function sieveOfEratosthenes() {
   isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님
   for (let i = 2; i * i <= maxN; i++) {
      if (isPrime[i]) {
         for (let j = i * i; j <= maxN; j += i) {
            isPrime[j] = false; // i의 배수들은 소수가 아님
         }
      }
   }
}

function goldbachConjecture(n) {
   for (let i = 2; i <= n / 2; i++) {
      if (isPrime[i] && isPrime[n - i]) {
         return `${n} = ${i} + ${n - i}`;
      }
   }
   return "Goldbach's conjecture is wrong.";
}

sieveOfEratosthenes(); // 소수 배열 미리 계산

const answers = [];
for (let i = 0; i < input.length; i++) {
   const n = input[i];
   if (n === 0) break;

   answers.push(goldbachConjecture(n));
}

console.debug(answers.join('\n'));
