function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let cntNum1 = {};
  let cntNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    !cntNum1[strNum1[i]] ? (cntNum1[strNum1[i]] = 1) : cntNum1[strNum1[i]]++;
  }
  for (let i = 0; i < strNum2.length; i++) {
    !cntNum2[strNum2[i]] ? (cntNum2[strNum2[i]] = 1) : cntNum2[strNum2[i]]++;
  }
  for (let key in cntNum1) {
    if (cntNum1[key] !== cntNum2[key]) return false;
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 587985);
sameFrequency(22, 222);
