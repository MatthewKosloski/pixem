import * as React from 'react';

import Header from './Header';
import { Container, Inner, Paragraph } from './Styles';

import { H1 } from '@atoms';

export default () => {
    return (
        <Container>
            <Header/>
            <Inner>
                <H1>An intuitive unit conversion tool for stylesheets</H1>
                <Paragraph>Pixem provides developers with the means to convert pixel units to the equivalient value in ems or rems.</Paragraph>
            </Inner>
        </Container>
    );
}