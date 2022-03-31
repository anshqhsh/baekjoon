// 주어진 n개의 숫자가 순서대로 더했을때 가장 큰 값을 return

function maxSubarraySum(arr, n) {
  let max = 0;
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (max < temp) {
      max = temp;
    }
  }
  return console.log(max);
}
function maxSubarraySum_Re(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return false;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    temSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return console.log(maxSum);
}

maxSubarraySum([1, 2, 4, 2, 8, 1, 5], 2);
maxSubarraySum_Re([1, 2, 5, 2, 8, 1, 5], 4);
