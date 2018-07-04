import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'rebass';

import theme from './theme';
import { Editor } from './components/ui';
import './global-styles/index';
import './img/curve.svg';

const app = (
	<Provider theme={theme}>
		<Editor />
	</Provider>
);

render(app, document.getElementById('app'));