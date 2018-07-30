import styled, { css } from 'styled-components';

import { _vrem, _vrrem, _rem } from '@util-wrappers';
import { hexToRgba } from '@utils';

export default styled('div')`${

    ({theme: {colors: { black, white }}}) => css`
    
        position: relative;
        top: 4px;
        display: inline-block;
        margin-left: ${_vrrem(0.5)};
        button {
            border: none;
            background-color: transparent;
            &:hover,
            &:focus {
                + span {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }
        span {
            pointer-events: none;
            transition: all 0.15s ease-in-out;
            transform: translateY(-5px);
            opacity: 0;
            position: absolute;
            bottom: 150%;
            left: 50%;
            width: 150px;
            margin-left: -75px;
            padding: ${_vrem(1)};
            background-color: ${hexToRgba(black, 0.85)};
            border-radius: 3px;
            text-transform: none;
            font-weight: 400;
            color: ${white};
            font-size: ${_rem(12)};
            z-index: 4;
            &::after {
                content: '';
                width: 0; 
                height: 0; 
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid ${hexToRgba(black, 0.85)};
                position: absolute;
                left: calc(50% - 8px);
                bottom: -8px;
            }
        }
    
    `

}`;