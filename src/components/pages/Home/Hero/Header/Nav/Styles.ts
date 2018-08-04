import styled, { css } from 'styled-components';
import { _vrrem, _rem, _vrem } from '@util-wrappers';

interface IMobileNavPropTypes {
    isMobileNavOpen: boolean;
}

export const DesktopNav = styled('nav')`${
    () => css`
        text-align: right;
    `
}`;

export const MobileNav = styled('nav')<IMobileNavPropTypes>`${
    ({
        isMobileNavOpen,
        theme: {colors: {white}}
    }) => css`
        transform: translateY(${isMobileNavOpen ? '0' : '-100%'});
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: transform 0.15s ease-in-out;
        background-color: ${white};
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    `
}`;

export const MobileContainer = styled('div')`
    display: flex;
    justify-content: flex-end;
`