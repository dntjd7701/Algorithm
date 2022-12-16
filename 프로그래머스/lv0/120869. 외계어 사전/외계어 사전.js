function solution(spell, dic) {
   let word = spell.sort().join('');
  for (const el of dic) {
    if (el.length === spell.length && word === [...el].sort().join('')) {
      return 1;
    }
  }
  return 2;
}