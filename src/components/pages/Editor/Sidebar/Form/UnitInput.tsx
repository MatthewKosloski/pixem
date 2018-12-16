import * as React from 'react';

import { InputRadio } from '@molecules';

interface IPropTypes {
	titles?: string[];
	values?: string[];
	name?: string;
	unit: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDefaultProps {
	titles: string[];
	values: string[];
	name: string;
}

const UnitInput: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		name: 'unit',
		titles: ['em', 'rem'],
		values: ['em', 'rem']
	};

	public render() {
		const {
			titles,
			values,
			unit,
			name,
			onChange
		} = this.props;

		return( 
			<React.Fragment>
				<InputRadio
					title={titles[0]}
					value={values[0]}
					name={name}
					checked={unit === values[0]}
					onChange={onChange} />
				<InputRadio
					title={titles[1]}
					value={values[1]}
					name={name}
					checked={unit === values[1]}
					onChange={onChange} />
			</React.Fragment>
		);
	}
};

export default UnitInput;