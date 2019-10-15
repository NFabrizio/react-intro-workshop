/* A root DOM node is simply an HTML element and can be any HTML element you choose */
<div id="root"></div>

/* ReactDOM.render will render the element you pass it into the root DOM node you pass it */
const element = <h1>Hello, Pearson</h1>;
ReactDOM.render(element, document.getElementById('root'));
