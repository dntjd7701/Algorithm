const readline = require("readline");

const solution = (line) => {
  let answer = line;
  const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

  answer = answer.replace(regExp, (word) => {
    return word.startsWith("<") ? word : word.split("").reverse().join("");
  });

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});