function findLongestWordLength(str) {
  str = str.split(" ");
  str = str.sort(function (a, b) {
    return b.length - a.length;
  });
  str = str[0];

  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
