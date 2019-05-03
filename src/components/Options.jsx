import React from 'react';
import Option from './Option';

const Options = ({ options, handleRemoveAll, handleDeleteOption }) => {
    return (
      <div>
        <button disabled={options.length === 0} onClick={handleRemoveAll}>Remove all</button>
        <ol>{options.map(option => (
        <Option 
        key={option} 
        optionText={option}
        handleDeleteOption={handleDeleteOption} 
        />
        ))}</ol>
      </div>
    );
};

export default Options;

