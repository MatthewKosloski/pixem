import * as React from 'react';
import { Heading } from 'rebass';

const Heading4: React.SFC<{}> = (props) => {
	return (
		<Heading {...props}
			is="h4"
			fontSize={1} 
			m={0}
			my={1}>
		{props.children}
		</Heading>
	);
};

export default Heading4;