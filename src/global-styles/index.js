import { injectGlobal } from 'styled-components';

import reset from './reset';
import cmsPixem from './cm-s-pixem';
import modal from './modal';
import codemirror from './codemirror';

export default injectGlobal`
    ${reset}
    ${cmsPixem}
    ${modal}
    ${codemirror}
`;