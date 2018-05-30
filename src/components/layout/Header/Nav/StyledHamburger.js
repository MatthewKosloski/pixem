import React from 'react';
import styled from 'styled-components';

import theme from '../../../../theme';

const { colors } = theme;

export default styled('label')`
	div {
		position: relative;
		width: 32px;
		height: 25px;
		cursor: pointer;
		z-index: 1;
	}
	div span,
	div span::before,
	div span::after {
		background-color: ${props => props.isMobileMenuVisible 
			? colors.cadetBlue 
			: colors.white};
		transition: 0.15s ease-in-out;
		width: 100%;
		height: 4px;
		display: block;
		position: absolute;
	}
	div span {
		top: 10px;
	}
	div span::before {
		content: '';
		top: -10px;
	}
	div span::after {
		content: '';
		bottom: -10px;
	}
`;
