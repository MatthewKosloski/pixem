import React from 'react';
import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '../../../../util-wrappers';

import Headings from './Headings';
import Form from './Form';

const StyledSidebar = styled('aside')`${
    ({theme: {media: {md}, colors: {shark, white, mako}}}) => css`
        background-color: ${shark};
        border-bottom: 2px solid ${mako};
        height: 100vh;
        color: ${white};
        font-size: ${_rem(16)};
        padding: ${_vrrem(1)};
        a {
            color: ${white};
        }
        @media ${md} {
            border-bottom: none;
            border-right: 2px solid ${mako};
        }
`}`;

const Sidebar = props => {
    return (
        <StyledSidebar>
            <Headings />
            <Form {...props}/>
        </StyledSidebar>
    );
};

export default Sidebar;