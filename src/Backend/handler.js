const { getDefaultStatus, getNextStatus } = require('../todoStates.js');

const initialState = () => ({ heading: 'todo', todoList: [], lastId: 0 });

const reducer = ({ heading, todoList, lastId }, newState) => {
  switch (newState.action) {
    case 'updateHeading':
      return { heading: newState.heading, todoList, lastId };

    case 'deleteTask':
      return {
        heading,
        todoList: todoList.filter((todo) => todo.id !== newState.id),
        lastId,
      };

    case 'deleteTodoList':
      return initialState();

    case 'updateTaskStatus':
      const newTodoList = [...todoList];
      const { task, id, status } = todoList[newState.id];
      newTodoList[newState.id] = { task, id, status: getNextStatus(status) };
      return { heading, todoList: newTodoList, lastId };

    case 'addTask':
      const todo = {
        task: newState.task,
        status: getDefaultStatus(),
        id: lastId,
      };
      return { heading, todoList: [...todoList, todo], lastId: lastId + 1 };

    default:
      return initialState();
  }
};

module.exports = { reducer, initialState };
