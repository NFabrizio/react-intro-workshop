/**
 * Let's start with the ticking clock example from earlier.
 *
 * 1. Create a Button classical component.
 * 2. Instantiate state on the Button classical component to store the button color.
 * 3. Use the color stored in the state in the render method to render the updated button color.
 *
 * Hint: Add the CSS styles at the bottom of this file to the src/index.css file
 * in your tech summit app and then, uncomment them.
 **/

function tick() {
  const element = (
    <div>
      <h1>Hello, Pearson!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

/* We can create a Clock component by pulling out and encapsulating the UI portion */

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
//
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

setInterval(tick, 1000);

/* Let's convert the Clock component to a classical component and implement state */

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );


/* CSS styling for button */

// button {
//   width: 150px;
//   height: 50px;
//   margin: 25px;
//   color: white;
//   font-size: 1.5em;
// }
//
// button.red {
//   background-color: red;
// }
//
// button.blue {
//   background-color: blue;
// }
