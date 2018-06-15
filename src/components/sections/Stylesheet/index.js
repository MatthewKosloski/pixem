import React, { Component, Fragment } from 'react';
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import { convertPixelNodes } from '../../../utils';
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

ReactModal.setAppElement(document.getElementById('app'));

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
			convertedStylesheet: '',
			base: '16',
			unit: this.units[0].value,
			shouldPreserveOriginalValues: true,
			isModalOpen: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.getCurrentUnitName = this.getCurrentUnitName.bind(this);

	}

	openModal() {
		this.setState({isModalOpen: true});
	}

	closeModal() {
		this.setState({isModalOpen: false});
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
			textareaContents,
			base,
			shouldPreserveOriginalValues
		} = this.state;

		const convertedStylesheet = convertPixelNodes({
			stylesheet: textareaContents,
			toUnit: this.getCurrentUnitName(),
			shouldPreserveOriginalValues,
			base
		});

		this.setState({ convertedStylesheet });
		this.openModal();

	}

	render() {
		
		const {
			base, 
			unit, 
			shouldPreserveOriginalValues,
			textareaContents,
			isModalOpen,
			convertedStylesheet
		} = this.state;

		return (
			<Fragment>
				<ReactModal
					isOpen={isModalOpen}
					onRequestClose={this.closeModal}
					{...this.props.reactModal}>
					<p>Here are your converted styles!</p>
					<textarea 
						value={convertedStylesheet}
						readOnly />
					<span 
						ariaLabel="Close Modal"
						onClick={this.closeModal}>
					</span>
				</ReactModal>
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
			</Fragment>
		);
	}
}

Stylesheet.propTypes = {
	reactModal: PropTypes.shape({
		closeTimeoutMS: PropTypes.number,
		portalClassName: PropTypes.string,
		className: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.shape({
				base: PropTypes.string,
				afterOpen: PropTypes.string,
				beforeClose: PropTypes.string
			})
		]),
		overlayClassName: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.shape({
				base: PropTypes.string,
				afterOpen: PropTypes.string,
				beforeClose: PropTypes.string
			})
		])
	})
};

export default Stylesheet;