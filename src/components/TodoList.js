import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';

const fetchReq = (url, callback) => {
  fetch(url)
    .then((x) => x.json())
    .then(callback);
};

const TodoList = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetchReq('/api/initialState', setState);
  }, []);

  const deleteTodoList = () => {
    fetchReq('/api/deleteTodoList', setState);
  };

  const deleteTask = (id) => {
    fetchReq(`/api/deleteTask/${id}`, setState);
  };

  const updateHeading = (heading) => {
    fetchReq(`/api/updateHeading/${heading}`, setState);
  };

  const updateTaskStatus = (id) => {
    fetchReq(`/api/updateTaskStatus/${id}`, setState);
  };

  const addTask = (task) => {
    fetchReq(`/api/addTask/${task}`, setState);
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
