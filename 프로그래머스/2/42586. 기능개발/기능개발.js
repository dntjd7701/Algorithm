function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]);
    });

    let currentDay = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentDay) {
            count++;
        } else {
            answer.push(count);
            currentDay = days[i];
            count = 1;
        }
    }

    // 마지막 묶음 추가
    answer.push(count);

    return answer;
}
