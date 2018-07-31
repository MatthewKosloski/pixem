import styled, { css } from 'styled-components';

import { _em, _vrrem } from '@util-wrappers';

import { 
    Label as AtomLabel, 
    Radio as AtomRadio 
} from '@atoms';

export const Container = styled('div')`
    display: inline-block;
    margin-right: ${_vrrem(1)};
`;

export const Radio = styled(AtomRadio)`${
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

export const Label = AtomLabel.extend`${
    ({theme: {colors: { shakespeare }}}) => css`
        margin: 0;
        display: inline-block;
        &::before {
            content: '';
            width: ${_em(45)};
            height: ${_em(45)};
            border: ${_em(1)} solid ${shakespeare};
            box-shadow: inset 0 0 0 ${_em(8)} transparent;
            transition: box-shadow 0.15s ease-in-out;
            display: inline-block;
            border-radius: 100%;
            vertical-align: top;
            position: relative;
            top: -${_em(10)};
            margin-right: ${_vrrem(0.5)};
            cursor: pointer;
        }
    `
}`;
