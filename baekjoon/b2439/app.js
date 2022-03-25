const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

let Num = +input;

solution(Num);

function solution(N) {
    
    //5번 반복 
    for(let i = 1; i<=N; i++){
        let answer = '';
        for(let j = N-i; j>0; j-- ){
            answer += ' ';
        }
        for(let k = 1; k<=i; k++){
            answer+= '*';
        }
        console.log(answer);
    }
}
