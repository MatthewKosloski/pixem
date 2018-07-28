import * as React from 'react';
import { Heading } from 'rebass';

const H3: React.SFC<{}> = (props) => {
	return (
		<Heading {...props}
			is='H3' 
			fontSize={2} 
			m={0}
			my={1}>
		{props.children}
		</Heading>
	);
}

export default H3;