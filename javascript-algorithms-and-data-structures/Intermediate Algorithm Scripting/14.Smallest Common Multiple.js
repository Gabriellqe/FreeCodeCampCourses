function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let smallestMultiple = max;
  let found = false;

  while (!found) {
    for (let i = min; i <= max; i++) {
      if (smallestMultiple % i !== 0) {
        break;
      }
      if (i === max) {
        found = true;
      }
    }
    if (!found) {
      smallestMultiple += max;
    }
  }

  return smallestMultiple;
}

smallestCommons([1, 5]);
