import * as React from 'react';

import { Textbox } from '@molecules';

import { ITextareaPropTypes } from '../../../../atoms/Textarea';

interface IDefaultProps {
	id: string;
	name: string;
}

const AffectedPropsInput: React.ComponentClass<ITextareaPropTypes> =
  class extends React.PureComponent<ITextareaPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		id: 'affectedProps',
		name: 'affectedProps'
	};

	public render() {
		return( 
			<Textbox 
				look="Shark" 
				{...this.props} />	
		);
	}
};

export default AffectedPropsInput;