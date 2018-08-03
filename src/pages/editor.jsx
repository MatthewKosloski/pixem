import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'rebass';

import theme from '@src/theme';
import { Editor } from '@pages';

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pixem</title>
            </Helmet>
            <Provider theme={theme}>
                <Editor />
            </Provider>
        </React.Fragment>
    );
}