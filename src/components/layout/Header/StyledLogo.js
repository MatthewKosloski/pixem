import React from 'react';
import styled from 'styled-components';

import { _modularscalerem } from '../../../util-wrappers';
import theme from '../../../theme';

const { white } = theme.colors;

export default styled('a')`
	font-size: ${_modularscalerem(2)};
	color: ${white};
	font-weight: 700;
`;