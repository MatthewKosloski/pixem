import { _vrrem, _rem } from '../../../../../util-wrappers';
import theme from '../../../../../theme';

import StyledMenu from './StyledMenu';

const { white, shakespeare } = theme.colors;

export default StyledMenu.extend`
	transform: translateY(${props => props.isMobileMenuVisible 
		? '0' 
		: '-100%'});
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	text-align: center;
	transition: transform 0.15s ease-in-out;
	background-color: ${white};
	padding: ${_vrrem(4)} 0;
	ul {
		font-size: ${_rem(18)};
		li {
			a {
				display: block;
				color: ${shakespeare};
				padding: ${_vrrem(0.5)} 0;
			}
		}
	}
`;