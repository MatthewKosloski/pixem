import * as React from 'react';

import { Hamburger } from '@molecules';
import { Row, Column } from '@atoms';

import Title from './Title';
import Subtitle from './Subtitle';
import { Container } from './Styles';

interface IPropTypes {
    isMobile: boolean;
    onHamburgerClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Header extends React.PureComponent<IPropTypes> {

    render() {
        const {isMobile, onHamburgerClick} = this.props;
        const isDesktop = !isMobile;

        return (
            <Container>
                {isDesktop ? (
                    <React.Fragment>
                        <Title />
                        <Subtitle />
                    </React.Fragment>
                ) : (
                    <Row alignItems="center">
                        <Column width={[9/12]}>
                            <Title isMobile/>
                            <Subtitle />
                        </Column>
                        <Column width={[3/12]}>
                            <Row justifyContent="flex-end">
                                <Column>
                                    <Hamburger 
                                        ariaLabel="Toggle Settings View"
                                        ariaControls="sidebar-mobile-form"
                                        onClick={onHamburgerClick} />
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                )}
            </Container>
        );
    }
}

export default Header;