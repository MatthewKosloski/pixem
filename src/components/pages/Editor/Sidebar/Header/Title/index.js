import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { _modularscalerem, _vrrem } from '../../../../../../util-wrappers';

const StyledTitle = styled('h1')`${
    ({isMobile}) => css`
        font-size: ${_modularscalerem(2)};
        font-weight: 700;
        margin-bottom: ${isMobile ? 0 : _vrrem(0.5)};
        display: block;
        a {
            text-decoration: none;
        }
    `
}`;

class Title extends PureComponent {

    componentDidUpdate() {
        console.log('Title update', this.props);
    }

    render() {
        return (
            <StyledTitle {...this.props}>
                <a href="#">Pixem</a>
            </StyledTitle>
        );
    }

}

export default Title;