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
                        <Logo 
                            text="Pixem" 
                            href="/" />
                    </Column>
                    <Column width={[4/12, 8/12]}>
                        <Nav>
                            <NavLink 
                                text="Usage"
                                href="#usage" />
                            <NavLink 
                                text="Quick Conversion"
                                href="#quick-conversion" />
                        </Nav>
                    </Column>
                </Row>
            </Container>
        </React.Fragment>
    );
}