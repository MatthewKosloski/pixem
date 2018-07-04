import React from 'react';
import { Box } from 'rebass';

const Column = props => (
	<Box {...props}>
		{props.children}
	</Box>
);

Column.defaultProps = {
	px: 1
};

export default Column;
