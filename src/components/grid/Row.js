import React from 'react';
import { Flex } from 'rebass';

export default (props) => (
	<Flex {...props}
		flexWrap={'wrap'}
		mx={-1}>
		{props.children}
	</Flex>
);