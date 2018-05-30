import React from 'react';
import styled from 'styled-components';

import { _vrrem, _modularscalerem } from '../../../util-wrappers';
import theme from '../../../theme';

const { aquamarine, scienceBlue, white } = theme.colors;

export default styled('section')`
	background: linear-gradient(-45deg, ${aquamarine}, ${scienceBlue});
	color: ${white};
	padding: ${_vrrem(1)} 0;
	font-size: ${_modularscalerem(0)};
`;