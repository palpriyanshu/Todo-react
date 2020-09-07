import React from 'react';
import Delete from './Delete';

const Todo = ({ todo, dispatch }) => {
  const { id, task, status } = todo;
  const updateTaskStatus = () => {
    dispatch({ action: 'updateTaskStatus', id });
  };

  const deleteTask = () => {
    dispatch({ action: 'deleteTask', id });
  };

  return (
    <div className="todoBox">
      <div className={`todo ${status}`} onClick={updateTaskStatus}>
        {task}
      </div>
      <Delete onDelete={deleteTask} id={id} />
    </div>
  );
};

export default Todo;
