import * as React from 'react';

import '@src/global-styles';

export default ({children}) =>
    <React.Fragment>
        {children()}
    </React.Fragment>