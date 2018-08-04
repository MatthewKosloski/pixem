import * as React from 'react';

import Nav from './Nav';
import NavLink from './NavLink';

import { Row, Column, Container } from '@atoms';
import { Logo } from './Styles';

export default () => {
    return (
        <React.Fragment>
            <Container>
                <Row alignItems="center">
                    <Column width={[8/12, 4/12]}>
                        <Logo href="#">
                            Pixem
                        </Logo>
                    </Column>
                    <Column width={[4/12, 8/12]}>
                        <Nav>
                            <NavLink href="#">
                                Usage
                            </NavLink>
                            <NavLink href="#">
                                Quick Conversions
                            </NavLink>
                        </Nav>
                    </Column>
                </Row>
            </Container>
        </React.Fragment>
    );
}