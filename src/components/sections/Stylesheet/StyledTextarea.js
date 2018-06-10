import styled, { css } from 'styled-components';

import { _rem, _vrrem } from '../../../util-wrappers';

export default styled('textarea')`${
	({theme: {colors: {shark, white}}}) => css`
		box-shadow: 0 4px 32px 6px rgba(0, 0, 0, 0.33);
		background-color: ${shark};
		width: 100%;
		height: 475px;
		border: none;
		border-radius: 6px;
		font-size: ${_rem(20)};
		color: ${white};
		padding: ${_vrrem(1)};
		resize: none;
	`
}`;