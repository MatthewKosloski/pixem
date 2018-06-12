import React, { Component } from 'react';
import { Flex } from 'rebass';

import { dynamicPrecision, modifyQuantityNodes } from '../../../utils';
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

const testTextareaContents = `
.title {
  font-size: 23.4px;
  line-height: 1.3;
  width: 80%; 
}`;

class Stylesheet extends Component {

	constructor(props) {
		super(props);

		this.units = [
			{name: 'em', value: '0'},
			{name: 'rem', value: '1'}
		];

		this.state = {
			textareaContents: testTextareaContents,
			base: '16',
			unit: this.units[0].value,
			shouldPreserveOriginalValues: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getCurrentUnitName = this.getCurrentUnitName.bind(this);

	}

	getCurrentUnitName() {
		return this.units.filter(unit => 
			unit.value === this.state.unit
		)[0].name;
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

		const newTextareaContents = modifyQuantityNodes(
			this.state.textareaContents, 
			(node, quantity) => {

				const newNumber = dynamicPrecision(
					quantity.number / this.state.base
				);

				const newUnit = this.getCurrentUnitName();

				if(/px/.test(quantity.unit)) {
					node.value = `${newNumber}${newUnit}; ${
						this.state.shouldPreserveOriginalValues
							? `/* ${node.value} */`
							: ``
					}`;
				}

		});

		this.setState({textareaContents: newTextareaContents});

	}

	render() {
		
		const {
			base, 
			unit, 
			shouldPreserveOriginalValues,
			textareaContents
		} = this.state;

		return (
			<StyledStylesheet>
				<Container>
					<Row mb={3}>
						<Column width={1}>
							<StyledTextarea 
								placeholder="// paste your CSS style sheet here"
								name="textareaContents"
								value={textareaContents}
								onChange={this.handleChange} />
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
													value={this.units[0].value}
													checked={unit === this.units[0].value}
													onChange={this.handleChange} />
											</div>
									
											<div style={{flex: '1'}}>
												<InputRadio
													title="REMs"
													name="unit"
													value={this.units[1].value}
													checked={unit === this.units[1].value}
													onChange={this.handleChange} />
											</div>
										</Flex>
									</Column>
								</Row>
								<Row justifyContent="center">
									<Column>
										<StyledSubmit 
											type="submit" 
											value="Convert" />
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