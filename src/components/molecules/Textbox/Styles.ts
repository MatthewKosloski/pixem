import styled, { css } from 'styled-components';

import { Textarea } from '@atoms';
import { _vrrem, _rem } from '@util-wrappers';

export const Default = styled(Textarea)`${
	({theme: {
		colors: {white}
	}}) => css`
		border: none;
		border-radius: 3px;
		padding: ${_vrrem(0.5)};
		font-size: ${_rem(16)};
		resize: none;
		min-height: ${_vrrem(5)};
	`
}`;

export const Shark = Default.extend`${
	({theme: {
		colors: {shark, darkShark, white}
	}}) => css`
		background-color: ${darkShark};
		color: ${white};
		&:focus {
			border-color: ${shark};
		}
	`
}`;