const { log } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; //컴퓨터에서 테스트 하는것과 제출할때를 나눠서 
let input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0]; //Numver(input[0]) 넘버로 쓰는것과 같은효과 
const inputTestCase = [];


for (let i = 1; i <= inputC; i++) {
    const arr = input[i].split(' ').map((item) => +item);
    inputTestCase.push(arr);
}

solution(inputC, inputTestCase);


function solution(C, testCase) {
    for(let i = 0; i<C; i++){
        const a = testCase[i];
        console.log(`Case #${i+1}: ${a[0]+a[1]}`)
    }
}
