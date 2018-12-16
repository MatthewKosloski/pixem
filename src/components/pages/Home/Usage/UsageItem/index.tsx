import * as React from 'react';

import { Title, Paragraph, Container } from './Styles';

interface IPropTypes {
	title: string;
	text: string;
	num: string;
}

const UsageItem: React.SFC<IPropTypes> = ({title, text, num}) => {
	return (
		<Container>
			<Title data-number={num}>{title}</Title>
			<Paragraph>{text}</Paragraph>
		</Container>
	);
};

export default UsageItem;