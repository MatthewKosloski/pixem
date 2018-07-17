import { css } from 'styled-components';

import Default from './Default';

export default Default.extend`${
	({theme: {colors: {shakespeare, white, shark}}}) => css`
		border: 1px solid ${shakespeare};
		color: ${shakespeare};
		&:hover {
			background-color: ${shakespeare};
			color: ${white};
		}
		&:focus {
			border-color: ${shark};
		}
`}`;