import styled, { css } from 'styled-components';

import { Anchor } from '@atoms';

import { _rem, _vrrem, _vrem, _em } from '@util-wrappers';

export const Default = styled(Anchor)`
	font-size: ${_rem(14)};
	border-radius: ${_em(6)};
	padding: 0 ${_vrem(1.5)};
	line-height: ${_vrrem(2)};
	height: ${_vrrem(2)};
	display: inline-block;
	cursor: pointer;
	background-color: transparent;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
`;

export const Shakespeare = Default.extend`${
	({theme: {
		colors: {shakespeare, white, shark}
	}}) => css`
		border: 1px solid ${shakespeare};
		color: ${shakespeare};
		&:hover {
			background-color: ${shakespeare};
			color: ${white};
		}
		&:focus {
			border-color: ${shark};
		}
`}`;

export const Shark = Default.extend`${
	({theme: {
		colors: {white, shark}
	}}) => css`
		border: 1px solid ${shark};
        color: ${white};
        background-color: ${shark};
		&:hover {
			opacity: 0.95;
		}
		&:focus {
			border-color: ${shark};
		}
`}`;