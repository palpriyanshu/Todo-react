const generateId = function () {
  let count = 0;
  return () => count++;
};

module.exports = { getId: generateId() };
