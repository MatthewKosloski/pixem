import styled, { css } from 'styled-components';

import { _vrrem, _modularscalerem } from '../../../util-wrappers';

export default styled('section')`${
	({theme: {colors: { aquamarine, scienceBlue, white }}}) => css`
		background: linear-gradient(-45deg, ${aquamarine}, ${scienceBlue});
		color: ${white};
		padding: ${_vrrem(2)} 0;
		font-size: ${_modularscalerem(0)};
		position: relative;
		&::after {
			content: '';
			background: url(../assets/img/curve.svg) 0 0/100% 50px no-repeat;
			width: 100%;
			height: 50px;
			position: absolute;
			bottom: 0;
		}	
	`
}`;