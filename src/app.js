import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'rebass';

import theme from './theme';
import { Hero, Stylesheet } from './components/sections';
import './global-styles/index';
import './img/curve.svg';

const app = (
	<Provider theme={theme}>
		<Hero />
		<Stylesheet />
	</Provider>
);

render(app, document.getElementById('app'));