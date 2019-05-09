import React from 'react';

const Action = ({ optionLength, makeDecision }) => {
    return (
      <div>
        <button className='big-button' disabled={optionLength === 0} onClick={makeDecision}>What should I do?</button>
      </div>
    );
};

export default Action;
