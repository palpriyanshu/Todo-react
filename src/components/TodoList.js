import React, { useState } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';
import { getDefaultStatus, getNextStatus } from '../todoStates';

const DEFAULT_HEADING = 'Todo';

const TodoList = (props) => {
  const [heading, setHeading] = useState(DEFAULT_HEADING);
  const [todoList, setTodoList] = useState([]);
  const [lastId, setLastId] = useState(0);

  const deleteTodoList = () => {
    setTodoList([]);
    setHeading(DEFAULT_HEADING);
    setLastId(0);
  };

  const deleteTask = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  const updateHeading = (heading) => {
    setHeading(heading);
  };

  const updateTaskStatus = (taskId) => {
    const newTodoList = todoList.slice();
    const { task, id, status } = todoList[taskId];
    newTodoList[taskId] = { task, id, status: getNextStatus(status) };
    setTodoList(newTodoList);
  };

  const addTask = (task) => {
    const todo = { task, status: getDefaultStatus(), id: lastId };
    setTodoList([...todoList, todo]);
    setLastId(lastId + 1);
  };

  const items = todoList.map((todo) => (
    <Todo
      todo={todo}
      updateTaskStatus={updateTaskStatus}
      deleteTask={deleteTask}
      key={todo.id}
    />
  ));

  return (
    <div>
      <div className="todoBox">
        <Heading updateHeading={updateHeading} value={heading} />
        <Delete onDelete={deleteTodoList} />
      </div>
      {items}
      <Input onSubmit={addTask} className="task" />
    </div>
  );
};

export default TodoList;
