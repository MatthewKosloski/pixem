import styled, { css } from 'styled-components';

import { Checkbox as AtomCheckbox } from '@atoms';

export const Checkbox = styled(AtomCheckbox)`${
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
        &:checked + label {
            svg {
                width: 16px;
            }
        }
    `
}`;

export const Label = styled('label')`${
    ({theme: {colors: {shakespeare}}}) => css`
        cursor: pointer;
        width: 32px;
        height: 32px;
        top: 0;
        left: 0;
        background: transparent;
        border: 1px solid ${shakespeare};
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
            width: 0;
            transition: width 0.15s ease-in-out;
        }
    `
}`;

export const Container = styled('div')`
    position: relative;
    display: inline-block;
`;

Label.defaultProps = {
    theme: {
        colors: {
            cadetBlue: 'blue'
        }
    }
};

Checkbox.defaultProps = {
    theme: {
        colors: {
            shark: 'charcoal',
            shakespeare: 'blue'
        }
    }
};