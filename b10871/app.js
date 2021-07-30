const fs = require('fs');
const { format } = require('path/posix');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; //컴퓨터에서 테스트 하는것과 제출할때를 나눠서 
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const inputTestCase = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, inputTestCase)

function solution(N, X, Num) {
    const  answer = [];
    for(let i = 0; i < N; i++){
        if(Num[i]<X){
            answer.push(Num[i]);
        }
        
    }
    console.log(answer.join(' '));
}
