import styled, { css } from 'styled-components';

import { _vrrem } from '../../../util-wrappers';

export default styled('header')`${
	({theme: {colors: white}}) => css`
		color: ${white};
		margin-bottom: ${_vrrem(4)};
	`
}`;