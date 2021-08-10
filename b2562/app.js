const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(item => +item);
solution(items);

function solution(N) {
  let maxNum = 0;
  let index = 0;
  for (let i = 0; i < N.length; i++) {
    if (maxNum < N[i]) {
      maxNum = N[i];
      index = i + 1;
    }
  }
  console.log(maxNum);
  console.log(index);
}
