function solution(id_pw, db) {
     const id = db.find((el) => el[0] === id_pw[0]);
  if (!id) return 'fail';
  if (id[1] !== id_pw[1]) return 'wrong pw';
  return 'login';
}