import styled, { css } from 'styled-components';

import { _modularscalerem } from '../../../util-wrappers';

export default styled('a')`${
	({theme: {colors: {white}}}) => css`
		font-size: ${_modularscalerem(2)};
		color: ${white};
		font-weight: 700;
	`
}`;