import styled, { css } from 'styled-components';

import { _vrrem } from '../../../../util-wrappers';

export default styled('header')`${
    ({theme: {colors: {darkShark}}}) => css`
        background-color: ${darkShark};
        height: 10vh;
        padding: 0 ${_vrrem(1)};
        display: flex;
        align-items: center;
        justify-content: space-between;
`}`;