function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  const sourceValues = Object.values(source);

  return collection.filter((obj) => {
    sourceKeys.every((key, index) => {
      obj.hasOwnProperty(key) && obj[key] === sourceValues[index];
    });
  });
}
