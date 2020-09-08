const { getDefaultStatus, getNextStatus } = require('../todoStates.js');

const initialState = () => ({ heading: 'todo', todoList: [], lastId: 0 });
let state;

const initiateState = function (req, res) {
  state = initialState();
  res.send(JSON.stringify(state));
};

const addTask = function (req, res) {
  const { heading, todoList, lastId } = state;
  const { task } = req.body;
  const todo = { task, status: getDefaultStatus(), id: lastId };
  state = { heading, todoList: [...todoList, todo], lastId: lastId + 1 };
  res.send(JSON.stringify(state));
};

const updateHeading = function (req, res) {
  const { todoList, lastId } = state;
  const { heading } = req.body;
  state = { heading, todoList, lastId };
  res.send(JSON.stringify(state));
};

const deleteTask = function (req, res) {
  const { heading, todoList, lastId } = state;
  const id = Number(req.body.id);
  const list = todoList.filter((todo) => todo.id !== id);
  state = { heading, todoList: list, lastId };
  res.send(JSON.stringify(state));
};

const updateTaskStatus = function (req, res) {
  const { heading, todoList, lastId } = state;
  const taskId = Number(req.body.id);
  const newTodoList = [...todoList];
  const { task, id, status } = todoList[taskId];
  newTodoList[taskId] = { task, id, status: getNextStatus(status) };
  state = { heading, todoList: newTodoList, lastId };
  res.send(JSON.stringify(state));
};

module.exports = {
  initiateState,
  addTask,
  updateHeading,
  deleteTask,
  updateTaskStatus,
};
