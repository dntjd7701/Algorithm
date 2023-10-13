const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Deque {
  constructor() {
    this._arr = [];
  }
  push_front(data) {
    this._arr.unshift(data);
  }
  push_back(data) {
    this._arr.push(data);
  }
  size() {
    return this._arr.length;
  }
  pop_front() {
    return this.size() === 0 ? -1 : this._arr.shift();
  }
  pop_back() {
    return this.size() === 0 ? -1 : this._arr.pop();
  }
  empty() {
    return this.size() === 0 ? 1 : 0;
  }
  front() {
    return this.size() === 0 ? -1 : this._arr[0];
  }
  back() {
    return this.size() === 0 ? -1 : this._arr[this.size() - 1];
  }
}

const deque = new Deque();
let result = [];
for (let i = 1; i <= parseInt(input[0]); i++) {
  let s = input[i].split(" ");
  switch (s[0]) {
    case "push_back":
      deque.push_back(parseInt(s[1]));
      break;
    case "push_front":
      deque.push_front(parseInt(s[1]));
      break;
    case "pop_front":
      result.push(deque.pop_front());
      break;
    case "pop_back":
      result.push(deque.pop_back());
      break;
    case "size":
      result.push(deque.size());
      break;
    case "empty":
      result.push(deque.empty());
      break;
    case "front":
      result.push(deque.front());
      break;
    case "back":
      result.push(deque.back());
  }
}
console.log(result.join("\n"));