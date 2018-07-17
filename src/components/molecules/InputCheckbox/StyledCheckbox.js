import styled, { css } from 'styled-components';

import { Checkbox } from '../../atoms';

const StyledCheckbox = styled(Checkbox)`${
    ({theme: {colors: {shakespeare, shark}}}) => css`
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        &:checked + label {
            background-color: ${shakespeare};
            border-color: ${shakespeare};
            text-indent: 0%;

        }
        &:focus + label {
            border-color: ${shark};
        }
        &:checked + label,
        &:focus + label {
            svg {
                width: 16px;
            }
        }
    `
}`;

StyledCheckbox.defaultProps = {
    theme: {
        colors: {
            shark: 'charcoal',
            shakespeare: 'blue'
        }
    }
};

export default StyledCheckbox;