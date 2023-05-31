function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) primes.push(i);
  }
  num = primes.reduce((a, b) => a + b);

  return num;
}

sumPrimes(10);
