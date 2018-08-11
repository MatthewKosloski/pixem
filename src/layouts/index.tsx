import * as React from 'react';
import { Helmet } from 'react-helmet';

import '@src/global-styles';

import { common } from '@data';

const { twitter, image } = common.meta;

export default ({children}) =>
    <React.Fragment>
        <Helmet>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta property="og:image" content={image} />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" /> 
        </Helmet>
        {children()}
    </React.Fragment>