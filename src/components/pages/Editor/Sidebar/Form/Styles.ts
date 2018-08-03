import styled, { css } from 'styled-components';

import { _vrrem } from '@util-wrappers';

import { IPropTypes } from './';

export const FormItem = styled('div')`${
    ({theme: {
        colors: {mako},
        media: {md}
    }}) => css`
        border-bottom: 2px solid ${mako};
        margin-bottom: ${_vrrem(1.5)};
        padding: 0 ${_vrrem(1)} ${_vrrem(1)} ${_vrrem(1)};
        @media ${md} {
            border-bottom: none;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0;
        }
    `
}`;

export const MobileForm = styled('div')<IPropTypes>`${
    ({
        isMobileFormVisible,
        theme: {
            colors: {shark}
        }
    }) => css`
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${shark};
        width: 100%;
        height: 100%;
        padding: ${_vrrem(4)} 0;
        transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
        transform: translateY(${isMobileFormVisible ? '0' : '-100%'});
        opacity: ${isMobileFormVisible ? '1' : '0'};
        z-index: 6;
        visiblity: ${isMobileFormVisible ? 'visible' : 'hidden'};
    `
}`;
