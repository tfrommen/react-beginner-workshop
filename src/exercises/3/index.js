// Now, let's extract the JSX string into a separate function, called App.

import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById( 'root' );

const element = <h1>Hello World!</h1>;

render( element, root );
