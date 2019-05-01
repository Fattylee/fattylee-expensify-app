'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  ReactDOM.render(templateFour, document.querySelector('#app-root'));
};

//renderCounterApp();

var Count = function (_React$Component) {
  _inherits(Count, _React$Component);

  function Count(props) {
    _classCallCheck(this, Count);

    var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Count, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      console.log('handleAddOne');
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      console.log('handleMinusOne');
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      console.log('handleReset');
      this.setState(function (prevState) {
        return {
          counter: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.counter
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Count;
}(React.Component);

;

ReactDOM.render(React.createElement(Count, null), document.querySelector('#app-root'));
