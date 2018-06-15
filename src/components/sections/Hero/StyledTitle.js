import styled, { css } from 'styled-components';

import { _modularscalerem } from '../../../util-wrappers';

export default styled('p')`${
	({theme: {media: {md}}}) => css`
		text-align: center;
		@media ${md} {
			font-size: ${_modularscalerem(1)};
		}
	`
}`;