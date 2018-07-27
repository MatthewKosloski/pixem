import React from 'react';
import { Flex } from 'rebass';

const Row = (props) => (
	<Flex {...props}
		flexWrap={'wrap'}>
		{props.children}
	</Flex>
);

Row.defaultProps = {
	mx: -1
};

export default Row;