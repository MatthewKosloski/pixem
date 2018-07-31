import * as React from 'react';
import styled, { css } from 'styled-components';

import { _vrrem } from '@util-wrappers';
import { Hamburger } from '@molecules';
import { Row, Column } from '@atoms';

import Title from './Title';
import Subtitle from './Subtitle';

const StyledHeader = styled('div')`${
    ({
        theme: {
            media: { md }
        }
    }) => css`
        @media ${md} {
            margin-bottom: ${_vrrem(1.5)};
        }
    `
}`;

interface IPropTypes {
    isMobile: boolean;
    onHamburgerClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Header extends React.PureComponent<IPropTypes> {

    render() {
        const {isMobile, onHamburgerClick} = this.props;
        const isDesktop = !isMobile;

        return (
            <StyledHeader>
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
                                        ariaControls={"foo"}
                                        onClick={onHamburgerClick}
                                        isMobileMenuVisible={true} />
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                )}
            </StyledHeader>
        );
    }
}

export default Header;