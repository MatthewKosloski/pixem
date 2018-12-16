import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'rebass';

import theme from '@src/theme';
import { Home } from '@pages';
import { home } from '@data';

const { url, title, description } = home.meta;

export default () => {
	return (
		<React.Fragment>
			<Helmet>
				<meta property="og:url" content={url} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta name="description" content={description} />
				<title>{title}</title>
			</Helmet>
			<Provider theme={theme}>
				<Home />
			</Provider>
		</React.Fragment>
	);
};