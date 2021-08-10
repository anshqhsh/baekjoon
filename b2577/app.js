const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(item => +item);

solution(items);

function solution(N) {
  let multi = String(N[0] * N[1] * N[2]);
  for (let i = 0; i <= 9; i++) {
    let arr = multi.split(i).length - 1;
    console.log(arr);
  }
}
