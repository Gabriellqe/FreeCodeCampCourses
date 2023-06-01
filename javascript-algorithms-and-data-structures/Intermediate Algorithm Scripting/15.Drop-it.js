function dropElements(arr, func) {
  let i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      break;
    }
    arr.shift();
  }

  return arr;
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});
