function solution(progresses, speeds) {
    const days = progresses.map((progress, idx) =>
        Math.ceil((100 - progress) / speeds[idx])
    );

    const result = [];
    let currentDay = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentDay) {
            // 이전 배포일에 같이 배포 가능
            count++;
        } else {
            // 새로운 배포 시작
            result.push(count);
            currentDay = days[i];
            count = 1;
        }
    }

    result.push(count); // 마지막 배포 묶음 추가
    return result;
}
