import styled, { css } from 'styled-components';

import { _vrem, _vrrem, _rem } from '@util-wrappers';
import { hexToRgba } from '@utils';

export const IconContainer = styled('div')`${
	({theme: {
		colors: {shakespeare}
	}}) => css`
		background-color: ${shakespeare};
		border-radius: 100%;
		width: 18px;
		height: 18px;
		position: relative;
		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	`
}`;

export const Container = styled('div')`${
	({theme: {
		colors: { black, white }
	}}) => css`
		top: 4px;
		display: inline-block;
		margin-left: ${_vrrem(0.5)};
		button {
			border: none;
			background-color: transparent;
			&:hover,
			&:focus {
				+ span {
					transform: translateY(0);
					opacity: 1;
				}
			}
		}
		span {
			pointer-events: none;
			transition: all 0.15s ease-in-out;
			transform: translateY(-5px);
			opacity: 0;
			position: absolute;
			bottom: 150%;
			left: 50%;
			width: 270px;
			margin-left: -135px;
			padding: ${_vrem(1)};
			background-color: ${hexToRgba(black, 0.92)};
			border-radius: 4px;
			text-transform: none;
			font-weight: 400;
			color: ${white};
			font-size: ${_rem(14)};
			z-index: 6;
		}
	`
}`;