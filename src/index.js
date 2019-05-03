//import './utils';
import React from 'react';
import ReactDOM from 'react-dom';

import i, {add, sub, Fattylee } from './utils';

const template = React.createElement('h1', {}, 'Hello World!');

const templateTwo = (
  <div>
    <Fattylee />
    <h1>Yes Heaven webpack!</h1>
  </div>
);

ReactDOM.render(templateTwo, document.querySelector('#app-root'));

console.log('babel webpack is running!', "assalamu 'alaikum warahmatullah. ");
console.log('4 + 5 =', add(4,5), sub(5,6));
console.log(i(65))