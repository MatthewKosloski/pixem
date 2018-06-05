import React, { Component } from 'react';

import { Container, Row, Column } from '../../grid';
import { Label, InputText, InputCheckbox, InputRadio } from '../../ui';

class Stylesheet extends Component {

	
	constructor(props) {
		super(props);

		this.state = {
			base: '16',
			unit: '0', // 0 = EMs, 1 = REMs
			shouldPreserveOriginalValues: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		const { type, checked, value, name } = e.target;
		this.setState({
			[name]: type === 'checkbox' 
				? checked 
				: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('Convert stuff...');
	}

	render() {
		const {base, unit, shouldPreserveOriginalValues} = this.state;
		return (
			<Container>
				<Row>
					<Column width={1}>
						<form onSubmit={this.handleSubmit}>
							<Label
								htmlFor="base"
								title="Base Pixel Size"
								tooltipText="This is tooltip text" />
							<InputText 
								id="base"
								name="base"
								value={base}
								onChange={this.handleChange} />
							
							<br/>

							<Label
								htmlFor="shouldPreserveOriginalValues"
								title="Preserve Original Values"
								tooltipText="This is tooltip text"/>	
							<InputCheckbox
								id="shouldPreserveOriginalValues"
								name="shouldPreserveOriginalValues"
								checked={shouldPreserveOriginalValues}
								onChange={this.handleChange} />
							
							<br/>

							<p>Conversion Unit</p>

							<InputRadio
								title="EMs"
								name="unit"
								value="0"
								checked={unit === '0'}
								onChange={this.handleChange} />
							<InputRadio
								title="REMs"
								name="unit"
								value="1"
								checked={unit === '1'}
								onChange={this.handleChange} />

							<br/>

							<input 
								type="submit" 
								value="Convert" />
						</form>
					</Column>
				</Row>
			</Container>
		);
	}
}

export default Stylesheet;