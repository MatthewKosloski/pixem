import React from 'react';
import styled from 'styled-components';

import StyledMenu from './StyledMenu';
import { _rem, _vrrem } from '../../../util-wrappers';
import theme from '../../../theme';

const { white } = theme.colors;

export default StyledMenu.extend`
	li {
		display: inline-block;
		&:not(:last-child) {
			margin-right: ${_vrrem(1)};
		}
		a {
			color: ${white};
		}
	}	
`;