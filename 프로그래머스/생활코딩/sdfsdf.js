function solution(office, k) {
  let answer = 0;

  // 행을 범위만큼 더해준다.
  for (let i = 0; i < office.length - k; i++) {
    let sum = 0;
    // answer += sumRowColumm(office, i, k, 'row');
    for (let a = i; a < i + k; a++) {
      console.log(office[i][a]);
      sum += office[i][a];
    }
    for (let j = 0; j < office[i].length - k; j++) {
      // answer += sumRowColumm(office, j, k, 'columm');
      for (let b = i; b < j + k; b++) {
        sum += office[b][i];
      }
    }
  }
  return answer;
}
solution(
  [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
  ],
  2
);
