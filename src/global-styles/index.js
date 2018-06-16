import { injectGlobal } from 'styled-components';

import reset from './reset';
import cmsPixem from './cm-s-pixem';

export default injectGlobal`
    ${reset}
    ${cmsPixem}
`;