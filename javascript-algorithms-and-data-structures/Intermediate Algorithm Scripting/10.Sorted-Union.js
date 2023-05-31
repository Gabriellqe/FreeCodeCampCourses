function uniteUnique(arr) {
  let args = [...arguments];
  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    newArr = newArr.concat(args[i]);
  }
  let uniqueArr = newArr.filter(
    (item, index) => newArr.indexOf(item) === index
  );
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
