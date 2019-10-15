class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }

  render() {
    return (<div>
      <button
         className={`btn ${this.state.color}`}
         onClick={this.handleChange}>
         Click me
      </button>
    </div>);
  }
}
