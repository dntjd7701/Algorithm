function solution(spell, dic) {
  return dic.some((v) => [...v].sort().toString() === spell.sort().toString()) ? 1 : 2
}