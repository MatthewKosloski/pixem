import React from 'react';
import { Heading } from 'rebass';

export default (props) => (
	<Heading {...props}
		is={'h2'} 
		fontSize={[2, 2, 3, 3]} 
		m={'0px'}
		my={1}>
		{props.children}
	</Heading>
);