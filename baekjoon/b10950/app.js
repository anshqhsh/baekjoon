const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testArray = [];
for(let i =1; i<= +input[0]; i++){
    const testValue = input[i].split(' ').map((item) => +item);
    testArray.push({ A: testValue[0], B: testValue[1] });
}
solution(+input[0], testArray);
function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testcaseArray[i].A;
        const B = testcaseArray[i].B;
        console.log(A + B);
    }
}