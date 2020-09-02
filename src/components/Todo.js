import React from 'react';

const Todo = ({ todo, updateTaskStatus, deleteTask }) => {
  const { id, task, status } = todo;
  return (
    <div className="todoBox">
      <div className={`todo ${status}`} onClick={() => updateTaskStatus(id)}>
        {task}
      </div>
      <div className="delete" onClick={() => deleteTask(id)}>
        x
      </div>
    </div>
  );
};

export default Todo;
