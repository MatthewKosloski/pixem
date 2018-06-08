import { css } from 'styled-components';

import { _vrrem } from '../../../../../util-wrappers';

import StyledMenu from './StyledMenu';

const StyledDesktopMenu = StyledMenu.extend`${
	({theme: {colors: {white}}}) => css`
		li {
			display: inline-block;
			&:not(:last-child) {
				margin-right: ${_vrrem(1)};
			}
			a {
				color: ${white};
			}
		}	
	`
}`;

StyledDesktopMenu.defaultProps = {
	theme: {
		colors: {
			white: 'white'
		}
	}
};

export default StyledDesktopMenu;