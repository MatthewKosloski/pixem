import React from 'react';
import { Box } from 'rebass';

const Column = props => (
	<Box {...props} px={1}>
		{props.children}
	</Box>
);

export default Column;
