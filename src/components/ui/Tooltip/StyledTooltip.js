import styled, { css } from 'styled-components';

import { _vrem, _vrrem, _rem } from '../../../util-wrappers';

export default styled('div')`${

    ({theme: {colors: { shark, white }}}) => css`
    
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
            background-color: ${shark};
            border-radius: 3px;
            text-transform: none;
            font-weight: 400;
            color: ${white};
            font-size: ${_rem(12)};
            &::after {
                content: '';
                width: 0; 
                height: 0; 
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid ${shark};
                position: absolute;
                left: calc(50% - 8px);
                bottom: -8px;
            }
        }
    
    `

}`;