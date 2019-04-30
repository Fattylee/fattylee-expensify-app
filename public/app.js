const appRoot = document.querySelector('#app-root');
const template = React.createElement(
'h1',
null,
'I love reacting!',
);

ReactDOM.render(template, appRoot);