import React from 'react';

const AddOption = ({ error, handleSubmit, options }) => {
  return (
    <div>
      {error && <p className='add-option-error'>{error}</p>}
      {!options.length && <p className='widget-body'>Please add an option to get started!</p>}
      <form onSubmit={handleSubmit}>
        <input text='text' name='option' />
        <button className='button'>Add options</button>
      </form>
    </div>
  );  
};

export default AddOption;