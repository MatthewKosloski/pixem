import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { _vrrem } from '../../../../../util-wrappers';
import { Hamburger } from '../../../../molecules';
import { Row, Column } from '../../../../atoms';

import Title from './Title';
import Subtitle from './Subtitle';

const StyledHeader = styled('div')`${
    ({theme: {media: {md}}}) => css`
        @media ${md} {
            margin-bottom: ${_vrrem(1.5)};
        }
    `
}`;

class Header extends PureComponent {

    componentDidUpdate() {
        console.log('Header update', this.props);
    }

    render() {
        const {isMobile, onHamburgerClick} = this.props;
        const isDesktop = !isMobile;

        return (
            <StyledHeader>
                {isDesktop ? (
                    <Fragment>
                        <Title />
                        <Subtitle />
                    </Fragment>
                ) : (
                    <Row alignItems="center">
                        <Column width={[1/2]}>
                            <Title isMobile/>
                        </Column>
                        <Column width={[1/2]}>
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

Header.propTypes = {
    onHamburgerClick: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired
};

export default Header;