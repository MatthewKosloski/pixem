import React from 'react';
import styled from 'styled-components';

import { _rem } from '../../../util-wrappers';

export default styled.nav.attrs({
	id: props => props.id
})`
	ul {
		list-style: none;
		font-size: ${_rem(14)};
		text-transform: uppercase;
		font-size: 700;
	}
`;