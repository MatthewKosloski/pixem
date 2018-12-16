import styled, { css } from 'styled-components';

import { _vrrem } from '@util-wrappers';
import { Label } from '@atoms';

export const MobileLabel = Label.extend`${
	({theme: {colors: {white}, media: {md}}}) => css`
		color: ${white};
		margin-bottom: ${_vrrem(0.25)};
		@media ${md} {
			position: relative;
			margin-bottom: ${_vrrem(1)};
			color: inherit;
		}
	`
}
`;

export const Paragraph = styled('p')`
	margin-bottom: ${_vrrem(1)};
`;
