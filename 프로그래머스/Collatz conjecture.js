let num = 6;
solution(num);
function solution(num) {
  var answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num != 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      console.log(i);
      return (answer = i);
    }
  }

  return answer;
}
