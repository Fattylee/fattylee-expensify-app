import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  onRequestClose={props.handleSelectedOption}
  isOpen={!!props.selectedOption}
  contentLabel="Selected option"
  >
    <h3>Selected option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;

