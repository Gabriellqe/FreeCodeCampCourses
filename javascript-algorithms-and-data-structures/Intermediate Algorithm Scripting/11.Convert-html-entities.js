function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  str = str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");

  return str;
}

convertHTML("Dolce & Gabbana");
