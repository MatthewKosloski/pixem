import styled, { css } from 'styled-components';

const StyledCheckboxLabel = styled('label')`${
    ({theme: {colors: {cadetBlue}}}) => css`
        cursor: pointer;
        width: 32px;
        height: 32px;
        top: 0;
        left: 0;
        background: transparent;
        border: 1px solid ${cadetBlue};
        border-radius: 3px;
        text-indent: 100%;
        text-align: center;
        overflow: hidden;
        display: inline-block;
        position: relative;
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `
}`;

StyledCheckboxLabel.defaultProps = {
    theme: {
        colors: {
            cadetBlue: 'blue'
        }
    }
};

export default StyledCheckboxLabel;