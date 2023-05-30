function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter((item) => !arr2.includes(item));
  newArr = newArr.concat(arr2.filter((item) => !arr1.includes(item)));
  return newArr;
}
