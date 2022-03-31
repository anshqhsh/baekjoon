function solution(k, arr) {
  let answer;

  let max = Number.MIN_SAFE_INTEGER;

  let sum = 0;

  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (rt - lt > k - 1) {
      sum -= arr[lt];
      lt++;
    }

    if (max < sum) {
      max = sum;
    }
  }

  answer = max;

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
