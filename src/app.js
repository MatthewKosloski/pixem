import React from 'react';
import { Provider } from 'rebass';

import theme from './theme';
import { Editor } from './components/ui';

export default (
	<Provider theme={theme}>
		<Editor />
	</Provider>
);
