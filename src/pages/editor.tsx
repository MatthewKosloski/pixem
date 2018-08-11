import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'rebass';

import theme from '@src/theme';
import { Editor } from '@pages';
import { editor } from '@data';

const { url, title, description } = editor.meta;

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
                <Editor />
            </Provider>
        </React.Fragment>
    );
}