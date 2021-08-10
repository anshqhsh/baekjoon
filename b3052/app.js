const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(item => +item);

solution(items);

function solution(N) {
  const answer = [];
  input.forEach(x => {
    const num = x % 42;

    if (answer.indexOf(num) === -1) {
      answer.push(num);
    }
  });
  console.log(answer.length);
}
