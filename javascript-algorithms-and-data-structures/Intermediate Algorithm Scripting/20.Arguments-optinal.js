function addTogether() {
  const [first, second] = arguments;

  if (
    typeof first !== "number" ||
    (arguments.length > 1 && typeof second !== "number")
  ) {
    return undefined;
  }

  if (arguments.length === 1) {
    return function (second) {
      if (typeof second !== "number") {
        return undefined;
      }
      return first + second;
    };
  }

  return first + second;
}
console.log(addTogether(5));
