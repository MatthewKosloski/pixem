import React from 'react';
import styled from 'styled-components';

export default styled.input.attrs({
	type: 'checkbox'
})`
	display: none;
	&:checked ~ div span {
		background: transparent;
	}
	&:checked ~ div span::before,
	&:checked ~ div span::after {
		top: 0;
	}
	&:checked ~ div span::before {
		transform: rotate(-45deg);
	}
	&:checked ~ div span::after {
		transform: rotate(45deg);
	}
`;