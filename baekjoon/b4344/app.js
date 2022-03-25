const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; //컴퓨터에서 테스트 하는것과 제출할때를 나눠서 
let input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0]; //Numver(input[0]) 넘버로 쓰는것과 같은효과 
const inputTestCase = [];

console.log(inputC);
for (let i = 1; i <= inputC; i++) {
    const arr = input[i].split(' ').map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; i++) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    }
    console.log(testCase)
    inputTestCase.push(testCase);
}
// console.log(inputTestCase)


function solution(C, testCase) {

    for (let testCaseIdx = 0; testCaseIdx < C; testCaseIdx++) {
        const n = testCase[testCaseIdx].N;
        const arr = testCase[testCaseIdx].arr;

        let scoreSum = 0;
        for (let i = 0; i < n; i++) {
            scoreSum += arr[i];
        }
        const average = scoreSum / n;

        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (average < arr[i]) {
                cnt++;
            }
        }
        const ratio = ((cnt / n) * 100).toFixed(3);
        console.log(ratio + "%");
    }
}

solution(inputC, inputTestCase);