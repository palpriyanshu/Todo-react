import React from 'react';

const Input = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      autoFocus
      type="text"
      onChange={({ target }) => props.onChange(target.value)}
      value={props.value}
    />
  </form>
);

export default Input;
