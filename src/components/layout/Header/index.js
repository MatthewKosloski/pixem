import React from 'react';

import { Row, Column } from '../../grid';

import Nav from './Nav';

import StyledLogo from './StyledLogo';
import StyledHeader from './StyledHeader';

export default () => (
	<StyledHeader>
		<Row alignItems="center">
			<Column width={[8/12, 4/12]}>
				<StyledLogo href="/">
					Pixem
				</StyledLogo>
			</Column>
			<Column width={[4/12, 8/12]}>
				<Nav items={[
					{link: '#usage', text: 'Usage'},
					{link: '#quick-conversions', text: 'Quick Conversions'}
				]}/>
			</Column>
		</Row>
	</StyledHeader>
);