import React from 'react';

export default Option = ({ optionText, handleDeleteOption }) => {
  return (
    <li>
      {optionText}
      <button onClick={(e) => {
        handleDeleteOption(optionText);
      }}>remove</button>
    </li>
  );
};