import React from 'react';
import { Container } from 'rebass';

import theme from '../../theme';

export default (props) => (
	<Container {...props}
		maxWidth={theme.containerMaxWidth}
		px={1}/>
);