import styled, { css } from 'styled-components';

import { Checkbox as AtomCheckbox } from '@atoms';

interface ILabelPropTypes {
	theme?: {
		colors: { shakespeare: string; }
	}
}

export const Checkbox = styled(AtomCheckbox)`
	display: none;
	&:checked {
		~ div {
			span {
				background: transparent;
				&::before {
					transform: rotate(-45deg);
				}
				&::after {
					transform: rotate(45deg);
				}
				&::before,
				&::after {
					top: 0;
				}
			}
		}
	}
`;

export const Label = styled('label')<ILabelPropTypes>`${
	({theme: {
		colors: {shakespeare}
	}}) => css`
		div {
			position: relative;
			width: 32px;
			height: 25px;
			cursor: pointer;
			z-index: 8;
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
				background-color: ${shakespeare};
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
Label.defaultProps = {
	theme: {
		colors: {
			shakespeare: 'blue',
		}
	}
};
