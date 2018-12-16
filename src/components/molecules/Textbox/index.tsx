import * as React from 'react';
import { ITextareaPropTypes } from '../../atoms/Textarea';

import * as Styles from './Styles';

type Look = 'Shark' | 'Default';

interface IPropTypes {
	look?: Look;
}

const Textbox: React.SFC<IPropTypes & 
ITextareaPropTypes> = ({look, ...rest}) => {
	const element = Styles[look];
	return React.createElement(element, rest);
};

Textbox.defaultProps = {
	look: 'Default'
};

export default Textbox;