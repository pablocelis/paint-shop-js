
const binaryGenerator = (n) => {
  const result = [];

  for (let i = 0; i < (1 << n); i++) {
    const combination = [];

    for (let j = 0; j < n; j++) {
      combination.push(i & (1 << j) ? 1 : 0);
    }
    result.push(combination);
  }
  return result;
};

module.exports = binaryGenerator;
