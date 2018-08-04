import styled, { css } from 'styled-components';

import { Link } from '@atoms';
import {  _modularscalerem } from '@util-wrappers';

export const Logo = styled(Link)`${
    ({theme: {
        colors: { white }
    }}) => css`
        font-size: ${_modularscalerem(2)};
        font-weight: 700;
        color: ${white};
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
    `
}`;