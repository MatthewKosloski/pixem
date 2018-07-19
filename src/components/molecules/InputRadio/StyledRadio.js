import styled, { css } from 'styled-components';

import { _em } from '../../../util-wrappers';

import { Radio } from '../../atoms';

export default styled(Radio)`${
    ({theme: {colors: {shakespeare, shark}}}) => css`
        position: absolute;
        opacity: 0;
        &:checked + label {
            &::before {
                background-color: ${shakespeare};
                box-shadow: inset 0 0 0 ${_em(5)} ${shark};
            }
        }
    `
}`;