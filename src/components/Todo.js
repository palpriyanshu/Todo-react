import React from 'react';

const Todo = ({ status, task, id, updateTaskStatus }) => {
  return (
    <div className={`todoBox ${status}`} onClick={() => updateTaskStatus(id)}>
      {task}
    </div>
  );
};

export default Todo;
