function pairElement(str) {
  let arr = str.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "A":
        result.push(["A", "T"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "G":
        result.push(["G", "C"]);
        break;
    }
  }
  return result;
}

pairElement("GCG");
