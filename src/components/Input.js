import React, { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState(props.value);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = value.trim();
    if (newValue) {
      props.onSubmit(newValue);
      setValue(props.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={props.className}
        type="text"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

Input.defaultProps = {
  value: '',
};

export default Input;
