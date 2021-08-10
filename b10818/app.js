const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; //컴퓨터에서 테스트 하는것과 제출할때를 나눠서
let input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0]; //Numver(input[0]) 넘버로 쓰는것과 같은효과
const inputTestCase = [];

const arr = input[1].split(' ').map(item => +item);

const testCase = {
  N: inputC,
  arr: arr,
};

solution(testCase);

function solution(testCase) {
  let maxNum = -1000001;
  let minNum = 1000001;

  for (let i = 0; i < testCase.N; i++) {
    item = testCase.arr[i];
    if (minNum > item) {
      minNum = item;
    }
    if (maxNum < item) {
      maxNum = item;
    }
  }
  console.log(minNum, maxNum);
}
