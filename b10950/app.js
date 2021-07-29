const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; //컴퓨터에서 테스트 하는것과 제출할때를 나눠서 
let input = fs.readFileSync(filePath).toString().split('\n');

const inputCase = +input[0]; //Numver(input[0]) 넘버로 쓰는것과 같은효과 
const inputTestCase = [];
for(let i = 1; i<inputCase; i++){
    inputTestCase.push
}
solution(inputC, inputTestCase);


function solution(C, testCase) {
}
