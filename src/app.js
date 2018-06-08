import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';

import theme from './theme';
import { Hero, Stylesheet } from './components/sections';

import './img/curve.svg';

injectGlobal`

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 112.5%;
		line-height: 1.3;
	}

	a {
		text-decoration: none;
	}

`;

const app = (
	<Provider theme={theme}>
		<Hero />
		<Stylesheet />
	</Provider>
);

render(app, document.getElementById('app'));
