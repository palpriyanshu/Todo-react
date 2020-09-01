import React from 'react';

const Delete = ({ id, deleteTask, symbol }) => {
  return (
    <div className="pointer centre" onClick={() => deleteTask(id)}>
      {symbol}
    </div>
  );
};

Delete.defaultProps = {
  symbol: 'x',
};

export default Delete;
