import styled from 'styled-components';

import { _rem, _vrrem } from '../../util-wrappers';

export default styled('a')`
	font-size: ${_rem(14)};	
	border-radius: 3px;
	padding: 0 ${_vrrem(2)};
	line-height: 45px;
	height: 45px;
	display: block;
	cursor: pointer;
	background-color: transparent;
	text-transform: uppercase;
	font-weight: 700;
`;