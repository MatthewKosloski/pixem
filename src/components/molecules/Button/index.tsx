import * as React from 'react';
import { IAnchorPropTypes } from '../../atoms/Anchor';

import * as Styles from './Styles';

type Look = 'Shark' | 'Shakespeare' | 'Default';

interface IPropTypes {
	look?: Look;
}

const Button: React.SFC<IPropTypes & IAnchorPropTypes> = ({look, ...rest}) => {
	const element = Styles[look];
	return React.createElement(element, rest);
};

Button.defaultProps = {
	look: 'Default'
};

export default Button;