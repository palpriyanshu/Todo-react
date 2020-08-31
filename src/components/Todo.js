import React from 'react';

const Todo = (props) => {
  return (
    <div
      className={`todoBox ${props.status}`}
      onClick={() => props.onClick(props.id)}
    >
      {props.task}
    </div>
  );
};

export default Todo;
