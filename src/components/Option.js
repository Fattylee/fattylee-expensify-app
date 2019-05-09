import React from 'react';

export default Option = ({ optionText, handleDeleteOption }) => {
  return (
    <li>
      {optionText}
      <button className='button--link' onClick={(e) => {
        handleDeleteOption(optionText);
      }}>remove</button>
    </li>
  );
};