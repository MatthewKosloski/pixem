import { css } from 'styled-components';

import StyledButton from './StyledButton';

export default StyledButton.extend`${
	({theme: {colors: {shakespeare, white}}}) => css`
		border: 1px solid ${shakespeare};
		color: ${shakespeare};
		&:hover {
			background-color: ${shakespeare};
			color: ${white};
		}
`}`;