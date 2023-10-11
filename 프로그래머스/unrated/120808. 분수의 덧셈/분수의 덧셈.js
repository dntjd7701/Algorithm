function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  // 분모의 최소 공배수를 구합니다.
  const lcm = (denom1 * denom2) / gcd(denom1, denom2);

  // 두 분수의 분자를 공통 분모에 맞게 확장합니다.
  const extendedNumer1 = numer1 * (lcm / denom1);
  const extendedNumer2 = numer2 * (lcm / denom2);

  // 확장된 분자를 더한 후, 결과를 기약 분수로 만듭니다.
  const resultNumer = extendedNumer1 + extendedNumer2;
  const resultDenom = lcm;

  // 결과를 기약 분수로 만들기 위해 최대 공약수로 나눕니다.
  const commonDivisor = gcd(resultNumer, resultDenom);
  const simplifiedNumer = resultNumer / commonDivisor;
  const simplifiedDenom = resultDenom / commonDivisor;

  return [simplifiedNumer, simplifiedDenom];
}
