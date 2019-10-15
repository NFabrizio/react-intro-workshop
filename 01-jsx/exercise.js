/** Copy and paste each of the JSX elements below into the index.js file of your
 * create-react-app. Be sure to only paste one at a time and then, check the
 * browser to see it update.
 *
 * Note: Make sure to update the ReactDOM.render function call with a reference
 * to the element you created instead of the <App /> component reference
 *
 **/

/* 1. A simple React element */
const element = <h1>Hello, Pearson!</h1>;

/* 2. A React element with an embedded expression */
const name = 'Cedrick Collomb';
const element = <h1>Hello, {name}</h1>;

/* 3. A React element with an embedded expression using a function */
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Dom',
  lastName: 'Philippine'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);
