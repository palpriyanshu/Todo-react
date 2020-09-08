const { getDefaultStatus, getNextStatus } = require('../todoStates.js');

const initialState = () => ({ heading: 'todo', todoList: [], lastId: 0 });
let state;

const initiateState = function (req, res) {
  state = initialState();
  res.send(
    JSON.stringify({ heading: state.heading, todoList: state.todoList })
  );
};

const addTask = function (req, res) {
  const { todoList, lastId } = state;
  const todo = { task: req.body.task, status: getDefaultStatus(), id: lastId };
  state.todoList = [...todoList, todo];
  state.lastId += 1;
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
