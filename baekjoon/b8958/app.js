const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

arraylength = +input[0];
const items = input.slice(1); // 첫 번째 원소를 잘라줌

solution(arraylength, items);

function solution(N, items) {
  for (let i = 0; i < N; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < items[i].length; j++) {
      if (items[i][j] === 'O') {
        count++;
      } else {
        count = 0;
      }
      sum += count;
    }
    console.log(sum);
  }
}
