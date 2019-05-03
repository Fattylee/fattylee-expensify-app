import React, { Component } from 'react';
import ReactDOM from 'react-dom';

console.log('utils is running');

const add = (a,b) => a + b;
export const sub = (a,b) => a - b;
const isSenior = (age) => {
  if(age < 65) return false;
  return true;
};
const age = 31;

class Fattylee extends Component {
  render() {
    return (
      <div>
        <h2>Fattylee Hackz</h2>
        <p>Los Angeles</p>
      </div>
    );
  }
};

export default isSenior;

export {add, Fattylee , /* age as default */};