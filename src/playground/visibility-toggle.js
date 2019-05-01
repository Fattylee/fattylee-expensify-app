const appRoot = document.querySelector('#app-root');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      visibility: false,
    }
  }
  onToggle() {
    this.setState( prevState => ({
      visibility: !prevState.visibility,
    }))
  }
  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.onToggle}>{!this.state.visibility ? 'Show details': 'Hide details'}</button>
           {this.state.visibility && <p>Here are your options</p>}
      </div>
);
  }
}




ReactDOM.render(<VisibilityToggle />, appRoot);



