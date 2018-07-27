import styled from 'styled-components';

import { Checkbox } from '../../atoms';

export default styled(Checkbox)`
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