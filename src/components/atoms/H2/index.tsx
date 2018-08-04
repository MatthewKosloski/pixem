import * as React from 'react';
import { Heading } from 'rebass';

const H2: React.SFC<{}> = (props) => {
	return (
		<Heading {...props}
			is='h2' 
			fontSize={[2, 2, 3, 3]} 
			m={0}
			my={1}>
		{props.children}
		</Heading>
	);
}

export default H2;