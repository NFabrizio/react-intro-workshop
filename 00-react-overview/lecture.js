/* Simplest React example application code */
ReactDOM.render(
  <h1>Hello, Pearson!</h1>,
  document.getElementById('root')
);

/* Declarative versus Imperative */
/* Code examples thanks to Ian Mundy at https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2 */
/* Imperative JavaScript code */

// const container = document.getElementById(‘container’);
// const btn = document.createElement(‘button’);
// btn.className = ‘btn red’;
// btn.onclick = function(event) {
//  if (this.classList.contains(‘red’)) {
//    this.classList.remove(‘red’);
//    this.classList.add(‘blue’);
//  } else {
//    this.classList.remove(‘blue’);
//    this.classList.add(‘red’);
//  }
// };
// container.appendChild(btn);

/* Declarative React code */

// class Button extends React.Component{
//   this.state = { color: 'red' }
//   handleChange = () => {
//     const color = this.state.color === 'red' ? 'blue' : 'red';
//     this.setState({ color });
//   }
//   render() {
//     return (<div>
//       <button
//          className=`btn ${this.state.color}`
//          onClick={this.handleChange}>
//       </button>
//     </div>);
//   }
// }

/* React does not manipulate the DOM. It updates the state and says there should be an element rendered with that new state. */
