function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((item) => !args.includes(item));
}
