import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import withDelete from './hocWithDelete';

import { fetchReq, optionsForPost, optionsForGet } from '../reqFunctions.js';

const HeaderWithDelete = withDelete(Heading);
const TodoWithDelete = withDelete(Todo);

const TodoList = (props) => {
  const [todoList, setTodoList] = useState(null);
  const [heading, setHeading] = useState(null);

  const callback = (state) => {
    setTodoList(state.todoList);
    setHeading(state.heading);
  };

  useEffect(() => {
    fetchReq('/api/initialState', callback, optionsForGet());
  }, []);

  const deleteTodoList = () => {
    fetchReq('/api/deleteTodoList', callback, optionsForPost());
  };

  const deleteTask = (id) => {
    fetchReq('/api/deleteTask', setTodoList, optionsForPost({ id }));
  };

  const updateHeading = (heading) => {
    fetchReq('/api/updateHeading', setHeading, optionsForPost({ heading }));
  };

  const updateTaskStatus = (id) => {
    fetchReq('/api/updateTaskStatus', setTodoList, optionsForPost({ id }));
  };

  const addTask = (task) => {
    fetchReq('/api/addTask', setTodoList, optionsForPost({ task }));
  };

  if (!(todoList && heading)) {
    return <p>loading...</p>;
  }

  const items = todoList.map(({ task, id, status }) => (
    <TodoWithDelete
      task={task}
      id={id}
      status={status}
      onDelete={deleteTask}
      key={id}
      updateTaskStatus={updateTaskStatus}
    />
  ));

  return (
    <div>
      <HeaderWithDelete
        onDelete={deleteTodoList}
        updateHeading={updateHeading}
        value={heading}
      />
      {items}
      <Input onSubmit={addTask} className="task" />
    </div>
  );
};

export default TodoList;
