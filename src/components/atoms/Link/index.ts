import styled, { css } from 'styled-components';
import { Link } from 'rebass';

export default styled(Link)`${
	({theme: {colors: {shakespeare}}}) => css`
		color: ${shakespeare};
		&:hover {
			text-decoration: underline;
		}
	`
}`;