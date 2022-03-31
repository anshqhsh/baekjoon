function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  arr.sort((a, b) => {
    return a - b;
  });
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 3, 4, 5, 6, 2, 3, 4, 1, 2, 3]);
