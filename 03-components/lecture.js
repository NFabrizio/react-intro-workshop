/* Functional React component */
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
/* ES2015 function */

// const Welcome = (props) => <h1>Hello, {props.name}</h1>;

/* ES2015 function with destructuring */

// const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

/* Components are rendered as React elements */

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

/* Component composition */

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

/* Classical React component */
/**
 * Classical components have three requirements:
 * 1. They must extend the React Component class.
 * 2. They must provide a render method.
 * 3. The render method must return something (e.g., React element, React component,
 *    call to a method that returns one of the aforementioned).
 * Note: Classical components reference props through the `this` value
 **/

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
