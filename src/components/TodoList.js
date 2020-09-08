import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';

const fetchReq = (url, callback, options) => {
  fetch(url, options)
    .then((x) => x.json())
    .then(callback);
};

const optionsForGet = () => {
  return {
    headers: { 'Content-Type': 'application/json' },
  };
};

const optionsForPost = (content) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
    method: 'POST',
  };
};

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

  const items = state.todoList.map((todo) => (
    <Todo
      todo={todo}
      deleteTask={deleteTask}
      key={todo.id}
      updateTaskStatus={updateTaskStatus}
    />
  ));

  return (
    <div>
      <div className="todoBox">
        <Heading updateHeading={updateHeading} value={state.heading} />
        <Delete onDelete={deleteTodoList} />
      </div>
      {items}
      <Input onSubmit={addTask} className="task" />
    </div>
  );
};

export default TodoList;
