const scores = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

solution(scores);

function solution(scores) {
  let answer = '';
  let arr = new Array(scores.length);
  // 행 별로 확인
  for (let i = 0; i < scores.length; i++) {
    let sum = 0;
    arr.push(0, 0);
    for (let j = 0; j < scores[i].length; j++) {
      // i = j 이고 자기 점수가 가장 높은 경우 제외
      arr[i] = new Array(j);
      arr[i].push(scores[j][i]);
      console.log(arr);
    }

    console.log(` ${i} 점수 : ${sum}`);
  }
  console.log(answer);
  return answer;
}
let arr = [100, 50, 47, 61, 24];
arrCheck(arr, 0);
//arr 를 받아서 중복 체크와 자기가 최대 값인걸 확인하는 로직
function arrCheck(arr, i) {
  let max = Math.max(...arr); //최대값 출력
  let dup = arr.indexOf(arr[i]); // 중복값 출력
  if (max === arr[i] && dup === 0) {
    console.log('Asas');
    console.log('asas' + arr.splice(i, 1));
    return arr.splice(i, 1);
  }
}
