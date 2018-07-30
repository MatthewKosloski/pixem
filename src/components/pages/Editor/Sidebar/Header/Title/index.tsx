import * as React from 'react';
import styled, { css } from 'styled-components';

import { _modularscalerem, _vrrem } from '@util-wrappers';

interface IPropTypes {
    isMobile?: boolean;
}

interface IDefaultProps {
    isMobile: boolean;
}

const StyledTitle = styled('h1')<IPropTypes>`${
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

const Title: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

    static defaultProps: IDefaultProps = {
        isMobile: false
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