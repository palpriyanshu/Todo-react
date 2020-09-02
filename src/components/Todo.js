import React from 'react';
import Delete from './Delete';

const Todo = ({ todo, updateTaskStatus, deleteTask }) => {
  const { id, task, status } = todo;
  return (
    <div style={{ display: 'flex' }}>
      <div className={`todoBox ${status}`} onClick={() => updateTaskStatus(id)}>
        {task}
      </div>
      <Delete deleteTask={deleteTask} id={id} />
    </div>
  );
};

export default Todo;
