import * as React from 'react';
import { Provider } from 'rebass';

import Editor from './components/pages/Editor';
import theme from './theme';

export default (
	<Provider theme={theme}>
		<Editor />
	</Provider>
);
