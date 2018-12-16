import styled, { css } from 'styled-components';

import { Anchor } from '@atoms';
import {  _modularscalerem } from '@util-wrappers';

export const Logo = styled(Anchor)`${
	({theme: {
		colors: { white }
	}}) => css`
		font-size: ${_modularscalerem(2)};
		font-weight: 700;
		color: ${white};
		text-decoration: none;
		&:hover {
			text-decoration: none;
		}
	`
}`;