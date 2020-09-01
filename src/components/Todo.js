import React from 'react';
import Delete from './Delete';

const Todo = ({ status, task, id, updateTaskStatus, deleteTask }) => {
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
