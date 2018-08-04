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
        a {
            color: ${white};
        }
        @media ${md} {
            height: 100vh;
            border-bottom: none;
            border-right: 2px solid ${mako};
            font-size: ${_rem(16)};
        }
`}`;