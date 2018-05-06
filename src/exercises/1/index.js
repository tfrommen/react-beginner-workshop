// Let's use React now!
// We still grab the root element, but creation of the h1 will be done with React.createElement().
// The configuration of that element will happen on-the-fly (by passing data as second argument).
// The "insertion" will then happen by React DOM's render method.

const root = document.getElementById( 'root' );

const element = document.createElement( 'h1' );
element.textContent = 'Hello World!';

root.appendChild( element );
