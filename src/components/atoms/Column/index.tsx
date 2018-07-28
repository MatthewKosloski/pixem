import * as React from 'react';
import { Box } from 'grid-styled';

const Column: React.SFC<{}> = (props) => {
	return (
		<Box {...props}>
			{props.children}
		</Box>
	);
}

Column.defaultProps = {
	px: 1
};

export default Column;
