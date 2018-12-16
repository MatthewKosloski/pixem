import * as React from 'react';

import { Container, Title } from './Styles';

interface IPropTypes {
	id: string;
	title: string;
	child: React.ReactNode;
}

const Panel: React.SFC<IPropTypes> = ({id, title, child}) => (
	<Container 
		id={id} 
		key={id}>
		<Title>
			{title}
		</Title>
		{child}
	</Container>
);

export default Panel;