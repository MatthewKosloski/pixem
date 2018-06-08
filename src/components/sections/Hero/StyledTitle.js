import styled from 'styled-components';

import { _vrrem, _modularscalerem } from '../../../util-wrappers';
import media from '../../../media';

export default styled('p')`
	text-align: center;
	margin-bottom: ${_vrrem(12)};
	${media.md`
		font-size: ${_modularscalerem(1)};
	`}
`;