import StyledLabel from '../StyledLabel';

import { _em, _vrrem } from '../../../util-wrappers';

export default StyledLabel.extend`
    &::before {
        content: '';
        width: ${_em(32)};
        height: ${_em(32)};
        border: ${_em(1)} solid ${props => props.theme.colors.shakespeare};
        display: inline-block;
        border-radius: 100%;
        vertical-align: top;
        position: relative;
        top: -${_em(4)};
        margin-right: ${_vrrem(0.5)};
    }
`;
