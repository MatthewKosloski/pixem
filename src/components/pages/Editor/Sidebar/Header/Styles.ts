import styled, { css } from 'styled-components';

import { _vrrem } from '@util-wrappers';

export const Container = styled('div')`${
	({theme: {
		media: { md }
	}}) => css`
		@media ${md} {
			margin-bottom: ${_vrrem(2.25)};
		}
	`
}`;