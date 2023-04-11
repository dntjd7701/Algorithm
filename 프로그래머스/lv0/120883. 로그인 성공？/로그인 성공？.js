function solution(id_pw, db) {
 const correctId = db.find((el) => el[0] === id_pw[0]);
  return !correctId ? 'fail' : correctId[1] !== id_pw[1] ? 'wrong pw' : 'login';
} 