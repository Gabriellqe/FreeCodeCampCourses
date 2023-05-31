function translatePigLatin(str) {
  let regex = /^[^aeiou]+/;
  let consonants = str.match(regex);
  return consonants !== null
    ? str.replace(regex, "").concat(consonants).concat("ay")
    : str.concat("way");
}
