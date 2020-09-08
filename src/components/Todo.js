import React from 'react';

const Todo = (props) => {
  return (
    <div
      className={`todo ${props.status}`}
      onClick={() => props.updateTaskStatus(props.id)}
    >
      {props.task}
    </div>
  );
};

export default Todo;
