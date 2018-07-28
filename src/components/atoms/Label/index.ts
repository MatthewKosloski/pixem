import styled, { css } from 'styled-components';

import { _rem, _vrrem } from '../../../util-wrappers';

export default styled('label')`${
    ({theme: {colors: {cadetBlue}}}) => css`
        font-weight: 700;
        font-size: ${_rem(14)};
        text-transform: uppercase;
        color: ${cadetBlue};
        margin-bottom: ${_vrrem(1)};
        display: block;
    `
}`;