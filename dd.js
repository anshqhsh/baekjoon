// 1. 사냥꾼 0,0 각몬스터는 원점을 제외한 곳에 위치
// M개의 총알을 가지고 있다
// 사냥꾼의 총이 (a,b) 방향으로 쏜다면 일직선으로 무한히 날아감
// 몬스터가 맞았다면 총알은 사라진다.
// 좌표 평면은 - 값도 있다.
// return 값은 사냥에 성공한 몬스터 수
// 첫 문제 몬스터 위치와 총알의 위치
// [[2,3],[4,5],[3,-3],[2,-4],[3,-6],[-3,-3],[-5,0],[-4,4]]
// [[4,1],[4,6],[1,-2],[-4,-4],[-3,0],[-4,4]]

function solution(monsters, bullets) {
  let answer = 0;
  // 총알이 지나가는 좌표를 구해줘야한다.
  for (let i = 0; i < bullets.length; i++) {
    const bulletPoint = bullets[i]; // [4,1]

    // 최대 공약수로 두 배열을 나눠서 최소값의 출발선을 설정  => 배수에 몬스터가 존재하면 맞을 것
    const minbullet = getGCD(bulletPoint[0], bulletPoint[1]);

    // // 좌표와 monster의 위치가 나눠진다면 좌표선상에 일치한다. [4,6]에 총을 쏠 때 [2,3]의 몬스터가 맞음
    for (let j = 0; j < monsters.length; j++) {
      const monsterPoint = monsters[j]; // [2,3]
      // 두 값을 비교 하여 큰 값의 배열이 작은 값의 배열에 나뉜다면
      console.log(monsterPoint);
      console.log(minbullet);
      console.log(monsterPoint[0] % minbullet[0]);
      console.log(monsterPoint[1] % minbullet[1]);

      if (
        monsterPoint[0] % minbullet[0] === 0 &&
        monsterPoint[1] % minbullet[1] === 0
      ) {
        console.log('check');
        answer++;
      }
    }
  }
  return answer;
}

// 최대 공약수를 구해서 배열 값을 나눠준다.
function getGCD(num1, num2) {
  let checkNum = [1, 1]; // 양수 체크
  if (num1 < 0) {
    num1 = Math.abs(num1);
    checkNum[0] = -1; // 음수
  }
  if (num2 < 0) {
    num2 = Math.abs(num2);
    checkNum[1] = -1; // 음수
  }

  let gcd = 1;
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return [(checkNum[0] * num1) / gcd, (checkNum[1] * num2) / gcd];
}

solution(
  [
    [2, 3],
    [4, 5],
    [3, -3],
    [2, -4],
    [3, -6],
    [-3, -3],
    [-5, 0],
    [-4, 4],
  ],
  [
    [4, 1],
    [4, 6],
    [1, -2],
    [-4, -4],
    [-3, 0],
    [-4, 4],
  ]
);
