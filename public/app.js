'use strict';

var appRoot = document.querySelector('#app-root');
var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: ['option one', 'option two']
};

var template = React.createElement(
  'div',
  null,
  app && app.title && React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  app.options && app.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options'
  ) : React.createElement(
    'p',
    null,
    'No options'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Fattylee'
  ),
  React.createElement(
    'p',
    null,
    'Age: 31'
  ),
  React.createElement(
    'p',
    null,
    'Location: 83, Ishola Daniel Str'
  )
);

var user = {
  name: 'Abu Adnaan',
  age: 31,
  location: 'Lagos'
};

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    JSON.stringify(user, null, 2)
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  ),
  true
);

var counter = 0;
var addOne = function addOne() {
  counter++;
  renderCounterApp();
  console.log('addOne');
};
var minusOne = function minusOne() {
  counter--;
  renderCounterApp();
  console.log('minusOne');
};
var reset = function reset() {
  counter = 0;
  renderCounterApp();
  console.log('reset');
};

var renderCounterApp = function renderCounterApp() {
  var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      counter
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateFour, appRoot);
};

renderCounterApp();
