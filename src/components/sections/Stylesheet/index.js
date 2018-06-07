import React, { Component } from 'react';
import { Container, Row, Column } from '../../grid';
import { 
	Label, 
	InputText, 
	InputCheckbox, 
	InputRadio, 
	StyledShakespeareButton
} from '../../ui';

import StyledStylesheet from './StyledStylesheet';

const StyledSubmit = StyledShakespeareButton.withComponent('input');

class Stylesheet extends Component {

	
	constructor(props) {
		super(props);

		this.state = {
			base: '16',
			unit: '0', // 0 = EMs, 1 = REMs
			shouldPreserveOriginalValues: true
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
		
		const {
			base, 
			unit, 
			shouldPreserveOriginalValues
		} = this.state;

		return (
			<StyledStylesheet>
				<Container small="true">
					<Row>
						<Column width={1}>
							<form onSubmit={this.handleSubmit}>
								<Row alignItems="center" mb={1}>
									<Column width={[1, 8/12]}>
										<Label
											htmlFor="base"
											title="Base Pixel Size"
											tooltipText="This is tooltip text" />	
									</Column>
									<Column width={[1, 4/12]}>
										<InputText 
											id="base"
											name="base"
											value={base}
											onChange={this.handleChange} />
									</Column>
								</Row>
								<Row alignItems="center" mb={1}>
									<Column width={[1, 8/12]}>
										<Label
											htmlFor="shouldPreserveOriginalValues"
											title="Preserve Original Values"
											tooltipText="This is tooltip text" />	
									</Column>
									<Column width={[1, 4/12]}>
										<InputCheckbox
											id="shouldPreserveOriginalValues"
											name="shouldPreserveOriginalValues"
											checked={shouldPreserveOriginalValues}
											onChange={this.handleChange} />
									</Column>
								</Row>
								<Row alignItems="center" mb={2}>
									<Column width={[1, 8/12]}>
										<Label
											title="Conversion Unit"
											tooltipText="This is tooltip text"/>	
									</Column>
									<Column width={[1, 4/12]}>
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
									</Column>
								</Row>
								<Row justifyContent="center">
									<Column>
										<StyledSubmit type="submit" value="Convert" />
									</Column>
								</Row>
							</form>
						</Column>
					</Row>
				</Container>
			</StyledStylesheet>
		);
	}
}

export default Stylesheet;