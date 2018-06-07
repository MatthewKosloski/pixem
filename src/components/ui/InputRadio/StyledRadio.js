import styled, { css } from 'styled-components';

import { _em } from '../../../util-wrappers';

export default styled.input.attrs({
    type: 'radio'
})`${
    ({theme: {colors: {shakespeare, white}}}) => css`
        position: absolute;
        opacity: 0;
        &:checked + label {
            &::before {
                background-color: ${shakespeare};
                box-shadow: inset 0 0 0 ${_em(3)} ${white};
            }
        }
    `
}`;