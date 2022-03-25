const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

let score = +input;

solution(score);

function solution(A) {
    // Write your code
    if (A >= 90) {
        console.log('A');
    } else if (A >= 80) {
        console.log('B');
    } else if (A >= 70) {
        console.log('C');
    } else if (A >= 60) {
        console.log('D')
    } else console.log('F');
}