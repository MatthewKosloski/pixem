import React from 'react';
import styled from 'styled-components';

import { _vrrem, _modularscalerem, _rem } from '../../../../../util-wrappers';

const StyledHeadings = styled('div')`
    margin-bottom: ${_vrrem(1.5)};
`;

const StyledTitle = styled('h1')`
    font-size: ${_modularscalerem(2)};
    font-weight: 700;
    margin-bottom: ${_vrrem(0.5)};
    display: block;
    a {
        text-decoration: none;
    }
`;

const StyledSubTitle = styled('h2')`
    font-size: ${_rem(14)};
    font-weight: 400;
`;

export default () => {
    return (
        <StyledHeadings>
            <StyledTitle>
                <a href="#">Pixem</a>
            </StyledTitle>
            <StyledSubTitle>
                A tool made by <a href="#">Matthew Kosloski</a>
            </StyledSubTitle>
        </StyledHeadings>
    );
};
