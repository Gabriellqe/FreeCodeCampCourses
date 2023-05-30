function sumAll(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    sum += i;
    console.log(sum);
  }
  return sum;
}

sumAll([4, 1]);
