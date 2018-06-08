import styled from 'styled-components';

export default styled.input.attrs({
	type: 'checkbox'
})`
	display: none;
	&:checked {
		~ div {
			span {
				background: transparent;
				&::before {
					transform: rotate(-45deg);
				}
				&::after {
					transform: rotate(45deg);
				}
				&::before,
				&::after {
					top: 0;
				}
			}
		}
	}
`;