import Label from '../../atoms/Label';

import { _em, _vrrem } from '../../../util-wrappers';

export default Label.extend`
    margin: 0;
    display: inline-block;
    &::before {
        content: '';
        width: ${_em(45)};
        height: ${_em(45)};
        border: ${_em(1)} solid ${props => props.theme.colors.shakespeare};
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
`;
