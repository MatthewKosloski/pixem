import styled, { css } from 'styled-components';

const StyledHamburger = styled('label')`${
	({isMobileMenuVisible, theme: {colors: {cadetBlue, white}}}) => css`
		div {
			position: relative;
			width: 32px;
			height: 25px;
			cursor: pointer;
			z-index: 2;
			span {
				top: 10px;
				&::before {
					content: '';
					top: -10px;
				}
				&::after {
					content: '';
					bottom: -10px;
				}
			}
			span,
			span::before,
			span::after {
				background-color: ${isMobileMenuVisible ? cadetBlue : white};
				transition: 0.15s ease-in-out;
				width: 100%;
				height: 4px;
				display: block;
				position: absolute;
			}
		}
	`
}`;

/**
 * Provide a default prop for each one you use above. 
 * This is so we don't have to wrap the component
 * in a ThemeProvider during testing.
 */
StyledHamburger.defaultProps = {
	theme: {
		colors: {
			cadetBlue: 'blue',
			white: 'white'
		}
	}
};

export default StyledHamburger;
