import * as React from 'react';

import { Container, Row, Column } from '@atoms';

import { Footer } from './Styles';

export default () => {
    return (
        <Container>
            <Row>
                <Column width={1}>
                    <Footer>
                        A product designed and developed by <a href="//matthewkosloski.me">Matthew Kosloski</a>
                    </Footer>
                </Column>
            </Row>
        </Container>
    );
}