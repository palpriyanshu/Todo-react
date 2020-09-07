import React from 'react';
import Delete from './Delete';

const Todo = ({ todo, deleteTask, updateTaskStatus }) => {
  const { id, task, status } = todo;

  return (
    <div className="todoBox">
      <div className={`todo ${status}`} onClick={() => updateTaskStatus(id)}>
        {task}
      </div>
      <Delete onDelete={deleteTask} id={id} />
    </div>
  );
};

export default Todo;
