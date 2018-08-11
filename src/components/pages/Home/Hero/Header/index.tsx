import * as React from 'react';
import * as random from 'randomstring';

import { Row, Column, Container } from '@atoms';
import { home, common } from '@data';

import Nav from './Nav';
import NavLink from './NavLink';
import { Logo } from './Styles';

const { navLinks } = home.hero;

export default () => {
    return (
        <React.Fragment>
            <Container>
                <Row alignItems="center">
                    <Column width={[8/12, 4/12]}>
                        <Logo 
                            text={common.siteName} 
                            href={common.pathPrefix} />
                    </Column>
                    <Column width={[4/12, 8/12]}>
                        <Nav>
                            {navLinks.map(link => (
                                <NavLink 
                                    key={random.generate()} 
                                    {...link} />
                            ))}
                        </Nav>
                    </Column>
                </Row>
            </Container>
        </React.Fragment>
    );
}