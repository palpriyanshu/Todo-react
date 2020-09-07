import React, { useState } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import Delete from './Delete';

const fetchReq = (url, callback) => {
  fetch(url)
    .then((x) => x.json())
    .then((state) => {
      console.log(state, 'fetchReg');
      callback(state);
    });
};

const initialState = () => ({ heading: 'todo', todoList: [], lastId: 0 });

const TodoList = (props) => {
  const [state, setState] = useState(initialState());

  const deleteTodoList = () => {
    fetchReq('http://localhost:3002/api/deleteTodoList', setState);
  };

  const deleteTask = (id) => {
    fetchReq(`http://localhost:3002/api/deleteTask/${id}`, setState);
  };

  const updateHeading = (heading) => {
    fetchReq(`http://localhost:3002/api/updateHeading/${heading}`, setState);
  };

  const updateTaskStatus = (id) => {
    fetchReq(`http://localhost:3002/api/updateTaskStatus/${id}`, setState);
  };

  const addTask = (task) => {
    fetchReq(`http://localhost:3002/api/addTask/${task}`, setState);
  };

  console.log(state, 'main');
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
