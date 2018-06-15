import StyledLabel from '../StyledLabel';

import { _em, _vrrem } from '../../../util-wrappers';

export default StyledLabel.extend`
    &::before {
        content: '';
        width: ${_em(32)};
        height: ${_em(32)};
        border: ${_em(1)} solid ${props => props.theme.colors.shakespeare};
        box-shadow: inset 0 0 0 ${_em(1)} transparent;
        transition: box-shadow 0.15s ease-in-out;
        display: inline-block;
        border-radius: 100%;
        vertical-align: top;
        position: relative;
        top: -${_em(4)};
        margin-right: ${_vrrem(0.5)};
        cursor: pointer;
    }
`;
