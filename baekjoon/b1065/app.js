const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

//한수 펑션
function d(num) {
  const strNum = String(num);
  if (strNum.length <= 2) {
    return true;
  }
  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];
  for (let i = 2; i < strNum.length; i++) {
    if (diff !== strNum[i] - beforeNum) {
      return false;
    }
    beforeNum = +strNum[i];
  }
  return true;
}

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (d(i)) {
      cnt++;
    }
  }

  console.log(cnt);
}
