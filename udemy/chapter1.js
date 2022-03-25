function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
let time = performance.now;
console.log(addUpTo(22222200));
let time2 = Performance.now();

console.log(`time elapsed: ${(time2 - time) / 1000}second`);
