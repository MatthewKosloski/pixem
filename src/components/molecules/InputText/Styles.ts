import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '@util-wrappers';
import { Text as AtomText } from '@atoms';

export const Default = styled(AtomText)`${
    ({theme: {
        colors: {white}
    }}) => css`
        border: none;
        border-radius: 3px;
        padding: ${_vrrem(0.5)};
        font-size: ${_rem(16)};
    `
}`;

export const Shark = Default.extend`${
    ({theme: {
        colors: {shark, darkShark, white}
    }}) => css`
        background-color: ${darkShark};
        color: ${white};
        &:focus {
            border-color: ${shark};
        }
    `
}`;

export const CadetBlueStroked = Default.extend`${
    ({theme: {
        colors: {cadetBlue}
    }}) => css`
        border: 1px solid ${cadetBlue};
    `
}`;