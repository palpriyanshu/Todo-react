import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Todo from './Todo.js';
import Input from './Input.js';
import withDelete from './hocWithDelete';

import { fetchApis } from '../fetchApis.js';

const HeaderWithDelete = withDelete(Heading);
const TodoWithDelete = withDelete(Todo);

const TodoList = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetchApis.initiateState().then(setState);
  }, []);

  const updateState = () => fetchApis.currentStatus().then(setState);

  const deleteTodoList = () => fetchApis.deleteTodoList().then(updateState);

  const deleteTask = (id) => fetchApis.deleteTask(id).then(updateState);

  const updateHeading = (heading) =>
    fetchApis.updateHeading(heading).then(updateState);

  const updateTaskStatus = (id) =>
    fetchApis.updateTaskStatus(id).then(updateState);

  const addTask = (task) => fetchApis.addTask(task).then(updateState);

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
