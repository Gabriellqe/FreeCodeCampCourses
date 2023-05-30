function palindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseNewStr = newStr.split("").reverse().join("");
  if (newStr === reverseNewStr) {
    return true;
  } else {
    return false;
  }
}
palindrome("eye");
