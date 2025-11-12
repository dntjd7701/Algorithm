// W개씩 H행에

const { readFile } = require('../../util');

// 모든 참가자는 세로로 N칸, 가로로 M칸 이상 비우고 앉아야함

// 즉, 다른 모든 참가자와 세로줄 번호의 차가 N보다 크거나 가로줄 번호의 차가 M보다 큰 곳에만 앉을 수 있다.

//H, W, N, M이 공백으로 구분되어 주어진다. (0 < H, W, N, M ≤ 50,000)

//강의실이 수용할 수 있는 최대 인원 수를 출력한다.
const [H, W, N, M] = readFile().split(' ').map(Number);

const rows = Math.ceil(H / (N + 1));
const columns = Math.ceil(W / (M + 1));

console.log(rows * columns);
