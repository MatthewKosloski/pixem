import { css } from 'styled-components';

import { _vrrem, _rem } from '../../../../../util-wrappers';

import StyledMenu from './StyledMenu';

const StyledMobileMenu = StyledMenu.extend`${
	({isMobileMenuVisible, theme: {colors: {white, shakespeare}}}) => css`
		transform: translateY(${isMobileMenuVisible ? '0' : '-100%'});
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		text-align: center;
		transition: transform 0.15s ease-in-out;
		background-color: ${white};
		padding: ${_vrrem(4)} 0;
		z-index: 7;
		ul {
			font-size: ${_rem(18)};
			li {
				a {
					display: block;
					color: ${shakespeare};
					padding: ${_vrrem(0.5)} 0;
				}
			}
		}
	`
}`;

StyledMobileMenu.defaultProps = {
	isMobileMenuVisible: true,
	theme: {
		colors: {
			white: 'white',
			shakespeare: 'shakespeare'
		}
	}
};

export default StyledMobileMenu;
