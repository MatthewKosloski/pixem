import * as React from 'react';

import { Container, Row, Column, Anchor } from '@atoms';
import { common } from '@data';

import { Footer } from './Styles';

const { name, url } = common.author;

export default () => {
    return (
        <Container>
            <Row>
                <Column width={1}>
                    <Footer>
                        A product designed and developed by <Anchor text={name} href={url} />
                    </Footer>
                </Column>
            </Row>
        </Container>
    );
}