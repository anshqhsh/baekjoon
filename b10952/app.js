const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testArray = [];
for(let i =0; i< input.length; i++){
    const testValue = input[i].split(' ').map((item) => +item);
    testArray.push({ A: testValue[0], B: testValue[1] });
}

solution(testArray);

function solution(arr) {
    let idx = 0;
    let A = 0;
    let B = 0;
    while(true){
        A = arr[idx].A;
        B = arr[idx].B;
        if(A === 0 && B === 0){
            break;
        }
    console.log(A+B);
    idx++;
    }
}