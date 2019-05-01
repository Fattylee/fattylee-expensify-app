'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.querySelector('#app-root');

var app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value.trim();
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

var render = function render() {
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
    ),
    React.createElement(
      'button',
      { disabled: !app.options.length, onClick: makeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: i },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { text: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add options'
      )
    )
  );

  var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
      _classCallCheck(this, IndecisionApp);

      return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
      key: 'render',
      value: function render() {
        var title = 'Indecision App';
        var subTitle = 'Put your life in the hands of a computer';
        var options = ['one thing', 'two thing', 'four thing'];
        return React.createElement(
          'div',
          null,
          React.createElement(Header, { title: title, subTitle: subTitle }),
          React.createElement(Action, null),
          React.createElement(Options, { options: options }),
          React.createElement(AddOption, null)
        );
      }
    }]);

    return IndecisionApp;
  }(React.Component);

  ;

  var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
      _classCallCheck(this, Header);

      return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            this.props.title
          ),
          React.createElement(
            'p',
            null,
            this.props.subTitle
          )
        );
      }
    }]);

    return Header;
  }(React.Component);

  ;

  var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
      _classCallCheck(this, Action);

      return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            null,
            'What should I do?'
          )
        );
      }
    }]);

    return Action;
  }(React.Component);

  ;

  var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
      _classCallCheck(this, Options);

      return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          this.props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
          })
        );
      }
    }]);

    return Options;
  }(React.Component);

  ;

  var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
      _classCallCheck(this, Option);

      return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          this.props.optionText
        );
      }
    }]);

    return Option;
  }(React.Component);

  ;

  var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
      _classCallCheck(this, AddOption);

      return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          'AddOption Component Here'
        );
      }
    }]);

    return AddOption;
  }(React.Component);

  ;

  ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
};

render();
