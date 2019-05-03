import React from 'react';

const AddOption = ({ error, handleSubmit, options }) => {
  return (
    <div>
      {error && <p>{error}</p>}
      {!options.length && <p>Add an option to get started</p>}
      <form onSubmit={handleSubmit}>
        <input text='text' name='option' />
        <button>Add options</button>
      </form>
    </div>
  );  
};

export default AddOption;

