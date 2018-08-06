import * as React from 'react';

import { Column, Row } from '@atoms';

import { Title, Container, Separator } from '../../Home/Styles';

export default () => {
    return (
        <Container>
            <Row>
                <Column width={1}>
                    <Title>Quick Conversions</Title>
                </Column>
            </Row>
            <Row>
                <Column width={1}>
                    <p>Put the conversion tool in here!</p>
                </Column>
            </Row>
            <Row>
                <Column width={1}>
                    <Separator marginBottom={1.5} />
                </Column>
            </Row>
        </Container>
    );
}