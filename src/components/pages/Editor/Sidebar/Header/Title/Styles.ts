import styled, { css } from 'styled-components';

import { _modularscalerem, _vrrem } from '@util-wrappers';

import { IPropTypes } from './';

export const Container = styled('h1')<IPropTypes>`${
	({isMobile}) => css`
		font-size: ${_modularscalerem(2)};
		font-weight: 700;
		margin-bottom: ${isMobile ? 0 : _vrrem(0.5)};
		display: block;
		a {
			text-decoration: none;
		}
	`
}`;
