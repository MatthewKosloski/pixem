import styled from 'styled-components';

import { _rem, _vrrem, _vrem, _em } from '@util-wrappers';

export default styled('a')`
	font-size: ${_rem(14)};
	border-radius: ${_em(6)};
	padding: 0 ${_vrem(1.5)};
	line-height: ${_vrrem(2.5)};
	height: ${_vrrem(2.5)};
	display: inline-block;
	cursor: pointer;
	background-color: transparent;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 700;
`;
