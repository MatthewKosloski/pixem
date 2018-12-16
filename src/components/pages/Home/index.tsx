import * as React from 'react';

import { Home } from './Styles';
import Hero from './Hero';
import Usage from './Usage';
import QuickConversions from './QuickConversions';
import Footer from './Footer';

export default () => {
	return (
		<Home>
			<Hero />
			<Usage />
			<QuickConversions />
			<Footer />
		</Home>
	);
};