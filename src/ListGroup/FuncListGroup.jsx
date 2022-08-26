import React from 'react';

const FuncListGroup = ({children}) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item row-4">{children[0]}</li>
        <li className="list-group-item">{children[1]}</li>
      </ul>
    </>
  );
};

export default FuncListGroup;