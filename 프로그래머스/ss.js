function solution(array, commands) {
  let answer = [];

  // commands에 값들을 받아옴
  for (let i = 0; i < commands.length; i++) {
    // 변수 선언
    let result = [];

    let key = commands[i][2];

    result = array.slice(commands[i][0] - 1, commands[i][1]).sort();
    answer.push(result[commands[i][2] - 1]);
  }
  console.log(answer);
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
