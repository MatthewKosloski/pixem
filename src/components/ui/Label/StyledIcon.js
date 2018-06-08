import styled, { css } from 'styled-components';

import { _vrrem } from '../../../util-wrappers';

export default styled('div')`${
    ({theme: {colors: {shakespeare}}}) => css`
        background-color: ${shakespeare};
        border-radius: 100%;
        width: 18px;
        height: 18px;
        margin-left: ${_vrrem(0.5)};
        text-align: center;
    `
}`;