import * as React from 'react';
import { Heading } from 'rebass';

const H1: React.SFC<{}> = (props) => {
	return (
		<Heading {...props}
			is='h1' 
			fontSize={[2, 2, 3, 4]} 
			m={0}
			my={1}>
		{props.children}
		</Heading>
	);
}

export default H1;