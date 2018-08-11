import * as React from 'react';

import { Button } from '@molecules';
import { Heading1 } from '@atoms';
import { home, common } from '@data';

import Header from './Header';
import { Container, Inner, Paragraph } from './Styles';

const { hero } = home;

export default () => {
    return (
        <Container>
            <Header/>
            <Inner>
                <Heading1>{hero.title}</Heading1>
                <Paragraph>{hero.subtitle}</Paragraph>
                <Button 
                    look="Shark"
                    text={hero.ctaText} 
                    href={`${common.pathPrefix}/editor`} />
            </Inner>
        </Container>
    );
}