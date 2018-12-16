import * as React from 'react';

export interface ITextareaPropTypes {
	value: string;
	id?: string;
	name?: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class Textarea extends React.PureComponent<ITextareaPropTypes> {
	public render() {
		return (
			<textarea {...this.props} />
		);
	}
}

export default Textarea;