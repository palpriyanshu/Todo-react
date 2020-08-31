import React from 'react';

const Todo = (props) => {
  let className = 'todo';
  let status = { isInProgress: true, isDone: false };

  if (props.isInProgress) {
    className = 'inProgress';
    status = { isInProgress: false, isDone: true };
  }

  if (props.isDone) {
    className = 'done';
    status = { isInProgress: false, isDone: false };
  }

  return (
    <div
      className={`todoBox ${className}`}
      onClick={() => props.onClick(props.id, status)}
    >
      {props.task}
    </div>
  );
};

export default Todo;
