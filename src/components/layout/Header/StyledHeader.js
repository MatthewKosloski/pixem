import React from 'react';
import styled from 'styled-components';

import { _vrrem } from '../../../util-wrappers';
import theme from '../../../theme';

const { white } = theme.colors;

export default styled('header')`
	color: ${white};
	margin-bottom: ${_vrrem(4)};
`;