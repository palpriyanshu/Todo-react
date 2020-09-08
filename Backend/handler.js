const { getDefaultStatus, getNextStatus } = require('./todoStates.js');

let state;

const initiateState = function (req, res) {
  state = { heading: 'todo', todoList: [] };
  res.send(JSON.stringify(state));
};

const addTask = function (req, res) {
  const { todoList } = state;
  const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 0;
  const todo = { task: req.body.task, status: getDefaultStatus(), id };
  state.todoList = [...todoList, todo];
  res.send(JSON.stringify(state.todoList));
};

const updateHeading = function (req, res) {
  state.heading = req.body.heading;
  res.send(JSON.stringify(req.body.heading));
};

const deleteTask = function (req, res) {
  const { todoList } = state;
  state.todoList = todoList.filter((todo) => todo.id !== req.body.id);
  res.send(JSON.stringify(state.todoList));
};

const updateTaskStatus = function (req, res) {
  const todo = state.todoList.find((todo) => todo.id === req.body.id);
  todo.status = getNextStatus(todo.status);
  res.send(JSON.stringify(state.todoList));
};

module.exports = {
  initiateState,
  addTask,
  updateHeading,
  deleteTask,
  updateTaskStatus,
};
