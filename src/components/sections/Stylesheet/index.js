import React, { Component, Fragment } from 'react';
import { Flex } from 'rebass';

import { convertPixelNodes } from '../../../utils';
import { Container, Row, Column } from '../../grid';
import * as ui from '../../ui';

import StyledStylesheet from './StyledStylesheet';

const StyledSubmit = ui.StyledShakespeareButton.withComponent('input');

const defaultEditorValue = `.title {
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
			editorValue: defaultEditorValue,
			convertedStylesheet: '',
			base: '16',
			unit: this.units[0].value,
			shouldPreserveOriginalValues: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getCurrentUnitName = this.getCurrentUnitName.bind(this);
		this.handleEditorChange = this.handleEditorChange.bind(this);

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

		const { 
			editorValue,
			base,
			shouldPreserveOriginalValues
		} = this.state;

		const convertedStylesheet = convertPixelNodes({
			stylesheet: editorValue,
			toUnit: this.getCurrentUnitName(),
			shouldPreserveOriginalValues,
			base
		});

		this.setState({ convertedStylesheet });
	}

	handleEditorChange(editor, data, value) {
		this.setState({
			editorValue: value
		});
	}

	render() {
		
		const {
			base, 
			unit, 
			shouldPreserveOriginalValues,
			editorValue,
			convertedStylesheet
		} = this.state;

		return (
			<Fragment>
				<StyledStylesheet>
					<Container size="large">
						<Row mb={3}>
							<Column width={[1, 1, 6/12]}>
								<ui.Editor 
									value={editorValue}
									onBeforeChange={this.handleEditorChange}
									autoFocus={true}
								/>
							</Column>
							<Column width={[1, 1, 6/12]}>
								<ui.Editor 
									value={convertedStylesheet}
									readOnly={true}
									cursorBlinkRate={-1}
								/>
							</Column>
						</Row>
					</Container>
					<Container size="small">
						<Row>
							<Column width={1}>
								<form onSubmit={this.handleSubmit}>
									<Row alignItems="center" mb={2}>
										<Column width={[1, 7/12]} mb={[1, 0]}>
											<ui.Label
												htmlFor="base"
												title="Base Pixel Size"
												tooltipText="This is tooltip text" />	
										</Column>
										<Column width={[1, 5/12]}>
											<ui.InputText 
												id="base"
												name="base"
												value={base}
												onChange={this.handleChange} />
										</Column>
									</Row>
									<Row alignItems="center" mb={2}>
										<Column width={[1, 7/12]} mb={[1, 0]}>
											<ui.Label
												htmlFor="shouldPreserveOriginalValues"
												title="Preserve Original Values"
												tooltipText="This is tooltip text" />	
										</Column>
										<Column width={[1, 5/12]}>
											<ui.InputCheckbox
												id="shouldPreserveOriginalValues"
												name="shouldPreserveOriginalValues"
												checked={shouldPreserveOriginalValues}
												onChange={this.handleChange} />
										</Column>
									</Row>
									<Row alignItems="center" mb={2}>
										<Column width={[1, 7/12]} mb={[1, 0]}>
											<ui.Label
												title="Conversion Unit"
												tooltipText="This is tooltip text"/>	
										</Column>
										<Column width={[1, 5/12]}>
											<Flex>
												<div style={{flex: '1'}}>
													<ui.InputRadio
														title="EMs"
														name="unit"
														value={this.units[0].value}
														checked={unit === this.units[0].value}
														onChange={this.handleChange} />
												</div>
										
												<div style={{flex: '1'}}>
													<ui.InputRadio
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
			</Fragment>
		);
	}
}

export default Stylesheet;