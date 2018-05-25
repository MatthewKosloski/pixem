import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass';

import theme from '../../theme';

export default styled(Link)`
	color: ${theme.colors.blue};
	&:hover {
		text-decoration: underline;
	}
`;