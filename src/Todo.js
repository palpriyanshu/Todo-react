import React from 'react';

const Todo = (props) => {
  const className = props.isDone ? 'todo done' : 'todo';
  return (
    <div className={className} onClick={() => props.onClick(props.id)}>
      {props.item}
    </div>
  );
};

export default Todo;
