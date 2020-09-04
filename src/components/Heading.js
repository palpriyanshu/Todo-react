import React, { useState } from 'react';
import Input from './Input';

const Heading = (props) => {
  const [state, onStateChange] = useState({ isEditable: false });

  const toggleEditable = () => {
    onStateChange({ isEditable: !state.isEditable });
  };

  const submitHeading = (heading) => {
    toggleEditable();
    props.updateHeading(heading);
  };

  const { value } = props;
  if (state.isEditable) {
    return <Input onSubmit={submitHeading} value={value} className="heading" />;
  }

  return (
    <div className="heading pointer" onClick={toggleEditable}>
      {value}
    </div>
  );
};

export default Heading;
