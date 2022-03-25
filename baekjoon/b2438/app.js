const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

let Num = +input;

solution(Num);

function solution(N) {
    answer = '';
    for(let i = 0; i<N; i++){
        answer += '*';
    console.log(answer)
    }
}