import styled, { css } from 'styled-components';

import { Anchor } from '@atoms';
import { _vrrem, _rem } from '@util-wrappers';

export const Container = styled('li')`${
	() => css`
		font-size: ${_rem(26)};
		display: inline-block;
		&:not(:last-child) {
			margin-right: ${_vrrem(1)};
		}
	`
}`;

export const Link = styled(Anchor)`${
	({theme: {
		colors: {white}
	}}) => css`
		text-transform: uppercase;
		text-decoration: none;
		color: ${white};
		font-size: ${_rem(14)};
		display: inline-block;
		padding: 0;
		&:hover {
			text-decoration: underline;
		}
	`
}`;