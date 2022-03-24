function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);
  const report_list = {}; //

  id_list.map(user => {
    report_list[user] = []; //key로 userid를 value로 빈 배열을 가지는 객체
  });

  report.map(user => {
    const [user_id, report_id] = user.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    console.log(key);
    console.log(report_list.neo); // string 값으로 받으면 선택이 가능하구만
    if (report_list[key].length >= k) {
      //이용정지 유저
      report_list[key].map(user => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  console.log(report_list);
  return answer;
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2
);
