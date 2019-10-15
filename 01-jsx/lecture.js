/* Simple JSX example code snippet */
const element = <h1>Hello, Pearson!</h1>;
/* which is identical to */
const element = React.createElement(
  'h1',
  {},
  'Hello, Pearson!'
);

/* Embedded expressions */

// const name = 'Cedrick Collomb';
// const element = <h1>Hello, {name}</h1>;

/* JavaScript functions can also be used */

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Dom',
//   lastName: 'Philippine'
// };
//
// const element = (
//   <h1>Hello, {formatName(user)}!</h1>
// );

/* JSX attributes and self-closing tags */

// const element = <div tabIndex="0" className="my-div" />;
