import * as React from 'react';

import { Button } from '@molecules';
import { Heading1 } from '@atoms';

import Header from './Header';
import { Container, Inner, Paragraph } from './Styles';

export default () => {
    return (
        <Container>
            <Header/>
            <Inner>
                <Heading1>An intuitive unit conversion tool for stylesheets</Heading1>
                <Paragraph>
                    Pixem provides developers with the means to convert pixel units to the equivalient value in ems or rems.
                </Paragraph>
                <Button 
                    look="Shark"
                    text="Start Using Pixem" 
                    href="/editor" />
            </Inner>
        </Container>
    );
}