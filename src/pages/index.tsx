import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'rebass';

import theme from '@src/theme';
import { Home } from '@pages';

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pixem</title>
            </Helmet>
            <Provider theme={theme}>
                <Home />
            </Provider>
        </React.Fragment>
    );
}