function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let start = alphabet.indexOf(str[0]);
  let end = alphabet.indexOf(str[str.length - 1]);
  let sub = alphabet.slice(start, end + 1);
  let missing = sub.split("").filter((letter) => !str.includes(letter));
  if (missing.length === 0) {
    return undefined;
  }
  str = missing.join("");
  return str;
}

fearNotLetter("abce");
