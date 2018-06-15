import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'rebass';

import theme from './theme';
import { Hero, Stylesheet } from './components/sections';
import './global-styles/index';
import './img/curve.svg';

const props = {
	reactModal: {
		closeTimeoutMS: 150,
		portalClassName: 'modal',
		className: {
			base: 'modal__content',
			afterOpen: 'modal__content--after-open',
			beforeClose: 'modal__content--before-close'
		},
		overlayClassName: {
			base: 'modal__overlay',
			afterOpen: 'modal__overlay--after-open',
			beforeClose: 'modal__overlay--before-close'
		}
	}
};

const app = (
	<Provider theme={theme}>
		<Hero />
		<Stylesheet {...props} />
	</Provider>
);

render(app, document.getElementById('app'));
