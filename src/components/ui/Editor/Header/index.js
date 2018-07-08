import React from 'react';
import styled, { css } from 'styled-components';

import StyledHeader from './StyledHeader';
import { _modularscalerem, _vrrem, _rem } from '../../../../util-wrappers';

const StyledLogo = styled('a')`${
    ({theme: {colors: {white}}}) => css`
        color: ${white};
        font-size: ${_modularscalerem(1)};
        font-weight: 700;
    `}`;

const StyledNav = styled('nav')`${
    ({theme: {colors: {white}}}) => css`
        font-size: ${_rem(16)};
        li {
            display: inline-block;  
            &:not(:last-child) {
                margin-right: ${_vrrem(2)};
            }
        }
        a {
            color: ${white};
        }
    `}`;

export default () => (
    <StyledHeader>
        <StyledLogo href="#">Pixem</StyledLogo>
        <StyledNav>
            <ul>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
            </ul>
        </StyledNav>
    </StyledHeader>
);