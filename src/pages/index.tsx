import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Paragraph = styled('p')`
    text-align: center;
    font: sans-serif;
`;

export default () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pixem</title>
            </Helmet>
            <Paragraph>This will be the homepage for Pixem.</Paragraph>
        </React.Fragment>
    );
}