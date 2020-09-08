import React from 'react';

const Delete = ({ id, onDelete }) => {
  return (
    <div className="delete" onClick={() => onDelete(id)}>
      x
    </div>
  );
};

Delete.defaultProps = {
  id: null,
};

const withDelete = (Component) => {
  return (props) => {
    return (
      <div className="todoBox">
        <Component {...props} />
        <Delete onDelete={props.onDelete} id={props.id} />
      </div>
    );
  };
};

export default withDelete;
