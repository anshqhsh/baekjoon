function solution(n) {
  var ans = 0;

  while (n > 0) {
    if (n % 2 == 0) {
      console.log('true');
      n /= 2;
      console.log(n);
    } else {
      console.log('else');

      n -= 1;
      ans += 1;
      console.log(n);
      console.log(ans);
    }
  }

  return ans;
}

console.log(solution(512));
