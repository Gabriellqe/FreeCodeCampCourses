function myReplace(str, before, after) {
  let regex = /^[A-Z]/;
  let isCapitalized = regex.test(before);
  if (isCapitalized) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

myReplace("His name is Tom", "Tom", "john");
