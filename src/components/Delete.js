import React from 'react';

const Delete = ({ id, onDelete }) => {
  return (
    <div className="delete" onClick={() => onDelete(id)}>
      x
    </div>
  );
};

export default Delete;
