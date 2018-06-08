import styled from 'styled-components';

import { _modularscalerem } from '../../../util-wrappers';
import media from '../../../media';

export default styled('p')`
	text-align: center;
	${media.md`
		font-size: ${_modularscalerem(1)};
	`}
`;