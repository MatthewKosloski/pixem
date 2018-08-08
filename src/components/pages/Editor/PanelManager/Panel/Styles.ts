import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '@util-wrappers';

export const Container = styled('div')`
    overflow-y: scroll;
    overflow-x: auto;
    position: relative;
`;

export const Title = styled('p')`${
    ({theme: {colors: {shark, white}}}) => css`
        position: absolute;
        z-index: 5;
        background-color: ${shark};
        display: block;
        width: 100%;
        color: ${white};
        font-size: ${_rem(14)};
        padding: ${_vrrem(1)} 0 ${_vrrem(1)} ${_vrrem(1)};
    `
}`