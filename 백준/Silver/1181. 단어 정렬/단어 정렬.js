// 백준 1181 단어 정렬

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const words = input.slice(1);

// 중복 제거
const uniqueWords = [...new Set(words)];

// 정렬: 길이순 → 사전순
uniqueWords.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

// 출력
console.log(uniqueWords.join("\n"));
