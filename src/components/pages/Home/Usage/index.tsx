import * as React from 'react';
import * as random from 'randomstring';

import { Column, Row } from '@atoms';
import { home, common } from '@data';
import { padNumber } from '@utils';

import { Title, Container, Separator } from '../../Home/Styles';
import UsageItem from './UsageItem';

const { title, items } = home.usage;

export default () => {
	return (
		<Container id="usage">
			<Row>
				<Title>{title}</Title>
			</Row>
			<Row>
				{items.map((item, index) => (
					<Column
						key={random.generate()}
						width={[1, 1 / 2]}>
						<UsageItem
							num={`${padNumber(index + 1)}.`}
							title={item.title}
							text={item.text}
							/>
					</Column>
				))}
			</Row>
			<Row>
				<Column width={1}>
					<Separator />
				</Column>
			</Row>
		</Container>
	);
};