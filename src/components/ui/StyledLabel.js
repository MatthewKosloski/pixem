import styled from 'styled-components';

import { _rem } from '../../util-wrappers';

export default styled('label')`
    font-weight: 700;
    font-size: ${_rem(14)};
    text-transform: uppercase;
    color: ${props => props.theme.colors.cadetBlue};
`;