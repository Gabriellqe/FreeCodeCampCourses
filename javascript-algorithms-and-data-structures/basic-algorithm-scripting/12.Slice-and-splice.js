function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();
  console.log(arr2Copy);
  console.log(arr2);

  arr2Copy.splice(n, 0, ...arr1);
  return arr2Copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
