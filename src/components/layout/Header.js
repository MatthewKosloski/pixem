import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../grid';

export default () => (
	<Container>
		<Row>
			<Column width={1}>
				<header>
					<a href="/">Pixem</a>
					<nav>
						<ul>
							<li>
								<a href="#">Usage</a>
							</li>
							<li>
								<a href="#">Quick Conversions</a>
							</li>
						</ul>
					</nav>
				</header>
			</Column>
		</Row>
	</Container>
);
