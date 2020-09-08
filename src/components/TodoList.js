import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import withDelete from './hocWithDelete';

import { fetchReq, optionsForPost, optionsForGet } from '../reqFunctions.js';

const HeaderWithDelete = withDelete(Heading);
const TodoWithDelete = withDelete(Todo);

const TodoList = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetchReq('/api/initialState', setState, optionsForGet());
  }, []);

  const deleteTodoList = () => {
    fetchReq('/api/deleteTodoList', setState, optionsForPost());
  };

  const deleteTask = (id) => {
    fetchReq('/api/deleteTask', setState, optionsForPost({ id }));
  };

  const updateHeading = (heading) => {
    fetchReq('/api/updateHeading', setState, optionsForPost({ heading }));
  };

  const updateTaskStatus = (id) => {
    fetchReq('/api/updateTaskStatus', setState, optionsForPost({ id }));
  };

  const addTask = (task) => {
    fetchReq('/api/addTask', setState, optionsForPost({ task }));
  };

  if (!state) {
    return <p>loading...</p>;
  }

  const items = state.todoList.map(({ task, id, status }) => (
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
        value={state.heading}
      />
      {items}
      <Input onSubmit={addTask} className="task" />
    </div>
  );
};

export default TodoList;
