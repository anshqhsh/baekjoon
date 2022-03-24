const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, 9, 10];

// console.log(arr.join(', '));

// console.log(arr.reverse()); // 기존의 배열을 변경

arr1.push(6);

console.log(arr1);

arr1.pop();

console.log(arr1);

const obj = { name: '이준혁', company: 'home' };

obj['email'] = 'anshqhsh@naver.com';

console.log('email' in obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));

for (const key in obj) {
  console.log(key, obj[key]);
}
