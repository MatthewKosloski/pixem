import styled, { css } from 'styled-components';

import { Link as AtomLink } from '@atoms';
import { _vrrem, _rem } from '@util-wrappers';

export const Container = styled('li')`${
    ({theme: {
        media: {md}
    }}) => css`
        display: block;
        font-size: ${_rem(26)};
        &:not(:last-child) {
            margin-right: 0;
        }
        @media ${md} {
            display: inline-block;
            &:not(:last-child) {
                margin-right: ${_vrrem(1)};
            }
        }
    `
}`

export const Link = styled(AtomLink)`${
    ({theme: {
        colors: {white, shakespeare},
        media: {md}
    }}) => css`
        text-transform: uppercase;
        text-decoration: none;
        color: ${shakespeare};
        font-size: ${_rem(20)};
        display: block;
        padding: ${_vrrem(0.5)} 0;
        &:hover {
            text-decoration: underline;
        }
        @media ${md} {
            display: inline-block;
            font-size: ${_rem(14)};
            color: ${white};
            padding: 0;
        }
    `
}`;