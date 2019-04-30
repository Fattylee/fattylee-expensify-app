'use strict';

var appRoot = document.querySelector('#app-root');
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'I love reacting, yes we do$$!'
  ),
  React.createElement(
    'p',
    null,
    'some info'
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
  )
);

ReactDOM.render(templateThree, appRoot);
