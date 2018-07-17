import React from 'react';
import { Heading } from 'rebass';

export default (props) => (
	<Heading {...props}
		is={'h4'} 
		fontSize={1} 
		m={'0px'}
		my={1}>
		{props.children}
	</Heading>
);