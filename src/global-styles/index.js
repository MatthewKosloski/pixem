import { injectGlobal } from 'styled-components';

import reset from './reset';
import modal from './modal';

export default injectGlobal`
    ${reset}
    ${modal}
`;