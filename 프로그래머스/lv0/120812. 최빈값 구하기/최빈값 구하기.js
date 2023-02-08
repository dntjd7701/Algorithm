function solution(array) {
    let obj = new Object({});
  array.forEach((el) => {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      ++obj[el];
    }
  });
  const t = Object.values(obj).reduce((prev, cur) => {
    return Math.max(prev, cur);
  });

  const rst = Object.keys(obj).filter((key) => {
    return obj[key] === t;
  });

  return rst.length > 1 ? -1 : +rst[0];
}