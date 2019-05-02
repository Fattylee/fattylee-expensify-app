'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.querySelector('#app-root');

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: [],
      error: undefined
    };
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.makeDecision = _this.makeDecision.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var text = e.target.elements.option.value.trim();
      //const error = this.props.handleSubmit(text);

      if (!text) {
        this.setState(function (prevState) {
          return { error: 'can\'t add an empty option' };
        });
        e.target.elements.option.value = '';
        return;
      } else if (this.state.options.find(function (option) {
        return option.toLowerCase() === text.toLowerCase();
      })) {
        this.setState(function (prevState) {
          return { error: 'option \'' + text + '\' already exist' };
        });
        e.target.elements.option.value = '';
        return;
      }

      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [text]),
          error: undefined
        };
      });

      e.target.elements.option.value = '';
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll(e) {
      this.setState(function (prevState) {
        return { options: [], error: undefined };
      });
    }
  }, {
    key: 'makeDecision',
    value: function makeDecision() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      if (this.state.options.length) {
        alert(this.state.options[randomNum]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision App';
      var subTitle = 'Put your life in the hands of a computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, {
          title: title,
          subTitle: subTitle
        }),
        React.createElement(Action, {
          optionLength: this.state.options.length,
          makeDecision: this.makeDecision
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleRemoveAll: this.handleRemoveAll
        }),
        React.createElement(AddOption, {
          handleSubmit: this.handleSubmit,
          error: this.state.error
        })
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
          { disabled: this.props.optionLength === 0, onClick: this.props.makeDecision },
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
        React.createElement(
          'button',
          { disabled: this.props.options.length === 0, onClick: this.props.handleRemoveAll },
          'Remove all'
        ),
        React.createElement(
          'ol',
          null,
          this.props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
          })
        )
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
        'li',
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
        this.props.error && React.createElement(
          'p',
          null,
          this.props.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.props.handleSubmit },
          React.createElement('input', { text: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add options'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

;

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
