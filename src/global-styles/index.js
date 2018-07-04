import { injectGlobal } from 'styled-components';

import reset from './reset';
import cmsPixem from './cm-s-pixem';

export default injectGlobal`
    ${reset}
    ${cmsPixem}
    .gutter {
        background-color: #434854;
        &.gutter-horizontal {
            cursor: ew-resize;
        }
    }
    .react-codemirror2 {
        height: 100%;
    }
`;