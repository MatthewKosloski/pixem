import * as React from 'react';
import styled, { css } from 'styled-components';

import StyledPanel from './StyledPanel';
import { _vrrem, _rem } from '@util-wrappers';

interface IPropTypes {
    id: string;
    title: string;
    child: React.ReactNode;
}

const StyledTitle = styled('p')`${
    ({theme: {colors: {shark, white}}}) => css`
        position: absolute;
        z-index: 5;
        background-color: ${shark};
        display: block;
        width: 100%;
        color: ${white};
        font-size: ${_rem(14)};
        padding: ${_vrrem(0.5)} 0 ${_vrrem(0.5)} ${_vrrem(1)};
    `
}`

const Panel: React.SFC<IPropTypes> = ({id, title, child}) => (
    <StyledPanel 
        id={id} 
        key={id}>
        <StyledTitle>
            {title}
        </StyledTitle>
        {child}
    </StyledPanel>
);

export default Panel;