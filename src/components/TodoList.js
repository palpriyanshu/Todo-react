import React, { useReducer } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';
import { getDefaultStatus, getNextStatus } from '../todoStates';

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
  }
};

const TodoList = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState());

  const deleteTodoList = () => {
    dispatch({ action: 'deleteTodoList' });
  };

  const addTask = (task) => {
    dispatch({ action: 'addTask', task });
  };

  const items = value.todoList.map((todo) => (
    <Todo todo={todo} dispatch={dispatch} key={todo.id} />
  ));

  return (
    <div>
      <div className="todoBox">
        <Heading dispatch={dispatch} value={value.heading} />
        <Delete onDelete={deleteTodoList} />
      </div>
      {items}
      <Input onSubmit={addTask} className="task" />
    </div>
  );
};

export default TodoList;
