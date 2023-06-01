function confirmEnding(str, target) {
  str = str.split(" ");
  let i = str.length - 1;
  str = str[i];
  str = str.slice(str.length - target.length, str.length);
  if (str === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
