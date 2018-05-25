import React from 'react';
import { Heading } from 'rebass';

export default (props) => (
	<Heading {...props}
		is={'h1'} 
		fontSize={[3, 3, 4, 5]} 
		m={'0px'}
		my={1}>
		{props.children}
	</Heading>
);