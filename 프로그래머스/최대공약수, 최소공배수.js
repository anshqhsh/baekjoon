solution(3, 12);

function solution(n, m) {
  let answer = []; // 최대공약수, 최소공배수

  const a =  
  return answer;
}

/**유클리드호제법
   * (a>b일때) a,b를 서로 나눈다, 나누어 지면 b가 최대 공약수
   * 나누어지지않는다면 b에 a를 b로 나눈 나머지를 다시 나눔(b/(a%b))
   * 나누어지면 a%b 가 최대 공약수
   */

function max(a, b){
  return (a%b) === 0 ? a : max(a,a%b);  
} 
function min(a,b){
  return a*b/max(a,b);
}