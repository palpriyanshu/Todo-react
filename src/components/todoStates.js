const DUE = 'due';
const DOING = 'doing';
const DONE = 'done';

const getNextStatus = function (currentStatus) {
  const nextStatus = {
    [DUE]: DOING,
    [DOING]: DONE,
    [DONE]: DUE,
  };

  return nextStatus[currentStatus];
};

const getDefaultStatus = () => DUE;

const generateId = function () {
  let count = 0;
  return () => count++;
};

module.exports = { getNextStatus, getDefaultStatus, generateId };
