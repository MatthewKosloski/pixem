import React from 'react';

import { Container, Row, Column } from '../../grid';
import { Header } from '../../layout';

import StyledHero from './StyledHero';
import StyledTitle from './StyledTitle';

export default () => (
	<StyledHero>
		<Container>
			<Row>
				<Column width={1}>
					<Header />
					<StyledTitle>
						A px and (r)em unit converter for style sheets.
					</StyledTitle>
				</Column>
			</Row>
		</Container>
	</StyledHero>
);