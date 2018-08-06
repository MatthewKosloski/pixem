import { css } from 'styled-components';

import Default from './Default';

export default Default.extend`${
	({theme: {
		colors: {white, shark}
	}}) => css`
		border: 1px solid ${shark};
        color: ${white};
        background-color: ${shark};
		&:hover {
			opacity: 0.95;
		}
		&:focus {
			border-color: ${shark};
		}
`}`;
