import styled, { css } from 'styled-components';

export default styled('div')`${
    ({theme: {colors: {shakespeare}}}) => css`
        background-color: ${shakespeare};
        border-radius: 100%;
        width: 18px;
        height: 18px;
        position: relative;
        svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `
}`;