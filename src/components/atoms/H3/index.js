import React from 'react';
import { Heading } from 'rebass';

export default (props) => (
	<Heading {...props}
		is={'h3'} 
		fontSize={2} 
		m={'0px'}
		my={1}>
		{props.children}
	</Heading>
);