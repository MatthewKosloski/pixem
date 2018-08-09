import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '@util-wrappers';

export const Container = styled('aside')`${
    ({theme: {
        media: {md}, 
        colors: {shark, white, cadetBlue, mako}
    }}) => css`
        background-color: ${shark};
        border-bottom: 2px solid ${mako};
        color: ${cadetBlue};
        font-size: ${_rem(14)};
        padding: ${_vrrem(1)};
        overflow: auto;
        width: 100%;
        a {
            color: ${white};
        }
        @media ${md} {
            border-bottom: none;
            border-right: 2px solid ${mako};
            font-size: ${_rem(16)};
            width: 300px;
            height: 100vh;
        }
`}`;