import * as React from 'react';

import { CheckboxIcon } from '@atoms';

import { Container, Checkbox, Label } from './Styles';

interface IPropTypes {
	id: string;
	name: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputCheckbox extends React.PureComponent<IPropTypes, {}> {
	public render() {
		const { id, name, checked, onChange } = this.props;
		return (
			<Container>
				<Checkbox 
					name={name}
					id={id}
					checked={checked}
					onChange={onChange}
				/>
				<Label htmlFor={id}>
					<CheckboxIcon />
				</Label>
			</Container>
		);
	}
}

export default InputCheckbox;