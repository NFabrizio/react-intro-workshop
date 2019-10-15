/**
 * Copy and paste the code below into the index.js file of the create-react-app,
 * replacing the existing ReactDOM.render function call
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

setInterval(tick, 1000);
