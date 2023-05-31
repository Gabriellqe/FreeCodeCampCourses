function sumFibs(num) {
  let fib = [1, 1];
  let i = 1;
  while (fib[i] + fib[i - 1] <= num) {
    fib.push(fib[i] + fib[i - 1]);
    i++;
  }
  num = fib.filter((item) => item % 2 !== 0).reduce((a, b) => a + b);

  return num;
}

sumFibs(4);
