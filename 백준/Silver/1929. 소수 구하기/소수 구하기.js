// 1929 소수구하기(실버)

// M 이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

//첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다.
//(1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

const os = require('os');

// 운영체제 정보 가져오기
const platform = os.platform();

// 현재 운영체제가 Linux인지 여부 확인
const isLinux = platform === 'linux';

const fs = require('fs')
   .readFileSync(isLinux ? '/dev/stdin' : './test.txt')
   .toString()
   .split(' ')
   .map(v => +v);

//에라토스테네스의 체(Sieve of Eratosthenes)
const [M, N] = fs;
function sieveOfEratosthenes(M, N) {
   // 최대 수까지의 배열을 생성
   const isPrime = Array(N + 1).fill(true);

   // 소수를 구해야 함으로, 0, 1을 나타내는 숫자는 False로 처리
   isPrime[0] = isPrime[1] = false;

   // 2의 배수부터 시작해서 1씩 증가하며, 그 배수만큼 제거함
   // 즉, 소수를 제외한 배수를 모두 제거함으로써, 소수만 남기고
   // 범위에 있는 소수만 검색
   for (let i = 2; i * i <= N; i++) {
      if (isPrime[i]) {
         for (let j = i * i; j <= N; j += i) {
            isPrime[j] = false;
         }
      }
   }

   const primes = [];
   for (let i = Math.max(2, M); i <= N; i++) {
      if (isPrime[i]) {
         primes.push(i);
      }
   }

   console.log(primes.join('\n'));
}

sieveOfEratosthenes(M, N);
