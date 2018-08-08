import styled, { css } from 'styled-components';

import { _vrrem, _modularscalerem } from '@util-wrappers';

export const Container = styled('section')`${
	({theme: {
        colors: { aquamarine, scienceBlue, white }
    }}) => css`
		background: linear-gradient(-45deg, ${aquamarine}, ${scienceBlue});
		color: ${white};
		padding: ${_vrrem(2)} 0;
		height: 625px;
		font-size: ${_modularscalerem(0)};
		position: relative;
	`
}`;

export const Inner = styled('div')`${
	({theme: {
		media: {md}
	}}) => css`
		text-align: center;
		max-width: 768px;
		margin-left: auto;
		margin-right: auto;
		margin-top: ${_vrrem(3)};
		padding: 0 ${_vrrem(1)};
		@media ${md} {
			padding: 0;
		}
	`
}`

export const Paragraph = styled('p')`
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
	margin-bottom: ${_vrrem(3)};
`