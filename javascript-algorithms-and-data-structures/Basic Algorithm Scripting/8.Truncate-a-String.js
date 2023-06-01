function truncateString(str, num) {
  if (str.length > num) {
    console.log(str);
    str = str.slice(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
