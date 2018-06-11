import styled, { css } from 'styled-components';
import { Link } from 'rebass';

export default styled(Link)`${
	({theme: {colors: {blue}}}) => css`
		color: ${blue};
		&:hover {
			text-decoration: underline;
		}
	`
}`;