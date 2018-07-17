import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '../../../util-wrappers';

import { Text } from '../../atoms';

export default styled(Text)`${
    ({theme: {colors: {white, shark, darkShark}}}) => css`
        background-color: ${darkShark};
        border: none;
        border-radius: 3px;
        padding: ${_vrrem(0.5)};
        font-size: ${_rem(16)};
        color: ${white};
        width: 100%;
        
        &:focus {
            border-color: ${shark};
        }
    `
}`;