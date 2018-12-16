import * as React from 'react';

interface IPropTypes {
	id?: string;
	name?: string;
	value: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Radio extends React.PureComponent<IPropTypes, {}> {
	public render() {
		return (
			<input type="radio" {...this.props}/>
		);
	}
}

export default Radio;