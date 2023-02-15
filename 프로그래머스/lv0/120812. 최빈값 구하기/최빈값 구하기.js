function solution(array) {
   let obj = new Object({});
  array.forEach((el) => {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      ++obj[el];
    }
  });
 
  const rst = Object.keys(obj).filter((key) => {
    return (
      obj[key] ===
      Object.values(obj).reduce((prev, cur) => {
        return Math.max(prev, cur);
      }) 
    );
  });

  return rst.length > 1 ? -1 : +rst[0];
}