// We don't really do anything else with root and element, so let's inline them.

import React from 'react';
import { render } from 'react-dom';

import App from './App';

const root = document.getElementById( 'root' );

const element = <App />;

render( element, root );
