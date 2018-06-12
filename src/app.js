import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';

import theme from './theme';
import { Hero, Stylesheet } from './components/sections';

import './img/curve.svg';

import { _vrrem, _rem } from './util-wrappers';

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

	.ReactModal__Body--open,
	.ReactModal__Html--open {
		overflow: hidden;
	}

	.modal__overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal__content {
		max-width: 100%;
		width: 768px;
		height: 475px;
		padding: ${_vrrem(1)};
		opacity: 0;
		textarea {
			box-shadow: 0 4px 32px 6px rgba(0, 0, 0, 0.33);
			background-color: ${theme.colors.shark};
			width: 100%;
			height: 100%;
			border: none;
			border-radius: 6px;
			font-size: ${_rem(20)};
			color: #fff;
			padding: ${_vrrem(1)};
			resize: none;
		}
	}

	.modal__content--after-open {
		opacity: 1;
		transition: opacity 300ms;
	}

	.modal__content--before-close {
		opacity: 0;
	}

`;

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
