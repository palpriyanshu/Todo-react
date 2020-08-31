import React from 'react';

const Todo = (props) => {
  let className = 'todo';
  if (props.isInProgress) {
    className = 'inProgress';
  }

  if (props.isDone) {
    className = 'done';
  }

  return (
    <div
      className={`todoBox ${className}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.task}
    </div>
  );
};

export default Todo;
