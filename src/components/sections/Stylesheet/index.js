import React, { Component } from 'react';
import { Flex } from 'rebass';

import { Container, Row, Column } from '../../grid';
import { 
	Label, 
	InputText, 
	InputCheckbox, 
	InputRadio, 
	StyledShakespeareButton
} from '../../ui';

import StyledStylesheet from './StyledStylesheet';
import StyledTextarea from './StyledTextarea';

const StyledSubmit = StyledShakespeareButton.withComponent('input');

const EM_UNIT = '0', REM_UNIT = '1';

/**
 * Tests:
 * 
 * - Renders one checkbox input with a name and id attr of "shouldPreserveOriginalValues"
 * - The checkbox with a name attr of "shouldPreserveOriginalValues" is in sync with the component's "shouldPreserveOriginalValues" state property
 * - The checkbox with a name attr of "shouldPreserveOriginalValues" is associated with a label
 * - 
 * - Renders two radio inputs with a name attr of "unit"
 * - The radio inputs with a name attr of "unit" are in sync with the component's "unit" state property
 */
class Stylesheet extends Component {

	
	constructor(props) {
		super(props);

		this.state = {
			base: '16',
			unit: EM_UNIT,
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
	}

	render() {
		
		const {
			base, 
			unit, 
			shouldPreserveOriginalValues
		} = this.state;

		return (
			<StyledStylesheet>
				<Container>
					<Row mb={3}>
						<Column width={1}>
							<StyledTextarea />
						</Column>
					</Row>
				</Container>
				<Container small="true">
					<Row>
						<Column width={1}>
							<form onSubmit={this.handleSubmit}>
								<Row alignItems="center" mb={2}>
									<Column width={[1, 7/12]} mb={[1, 0]}>
										<Label
											htmlFor="base"
											title="Base Pixel Size"
											tooltipText="This is tooltip text" />	
									</Column>
									<Column width={[1, 5/12]}>
										<InputText 
											id="base"
											name="base"
											value={base}
											onChange={this.handleChange} />
									</Column>
								</Row>
								<Row alignItems="center" mb={2}>
									<Column width={[1, 7/12]} mb={[1, 0]}>
										<Label
											htmlFor="shouldPreserveOriginalValues"
											title="Preserve Original Values"
											tooltipText="This is tooltip text" />	
									</Column>
									<Column width={[1, 5/12]}>
										<InputCheckbox
											id="shouldPreserveOriginalValues"
											name="shouldPreserveOriginalValues"
											checked={shouldPreserveOriginalValues}
											onChange={this.handleChange} />
									</Column>
								</Row>
								<Row alignItems="center" mb={2}>
									<Column width={[1, 7/12]} mb={[1, 0]}>
										<Label
											title="Conversion Unit"
											tooltipText="This is tooltip text"/>	
									</Column>
									<Column width={[1, 5/12]}>
										<Flex>
											<div style={{flex: '1'}}>
												<InputRadio
													title="EMs"
													name="unit"
													value={EM_UNIT}
													checked={unit === EM_UNIT}
													onChange={this.handleChange} />
											</div>
									
											<div style={{flex: '1'}}>
												<InputRadio
													title="REMs"
													name="unit"
													value={REM_UNIT}
													checked={unit === REM_UNIT}
													onChange={this.handleChange} />
											</div>
										</Flex>
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