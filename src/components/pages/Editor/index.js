import React, { Component, Fragment } from 'react';
import valueParser from 'postcss-value-parser';

import * as utils from '../../../utils';

import { TwoColumn } from '../../templates';
import { Modal } from '../../molecules';

import Sidebar from './Sidebar';
import PanelManager from './PanelManager';
import Textarea from './Textarea';

const defaultUserInput = `.title {
	font-size: 23.4px;
	line-height: 1.3;
	width: 80%; 
  }`;  

const Settings = () => (
	<p>Settings</p>
);

const Help = () => (
	<p>Help</p>
);

class Editor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userInput: defaultUserInput,
			result: '',
			base: '16',
			unit: 'em',
			shouldPreserveOriginalValues: true,
			modal: {
				isOpen: false,
				activeChild: 'help'
			}
		};

		this.handleUserInputChange = this.handleUserInputChange.bind(this);
		this.renderModalChildren = this.renderModalChildren.bind(this);
		this.setResult = this.setResult.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleUserInputChange(editor, data, value) {
		this.setState({userInput: value});
		this.setResult();
	}

	setResult() {
		const { 
			userInput, 
			base, 
			unit, 
			shouldPreserveOriginalValues 
		} = this.state;

		const result = this.convertPixelNodes({
			stylesheet: userInput,
			toUnit: unit,
			shouldPreserveOriginalValues,
			base
		});

		this.setState({ result });
	}

	/**
	 * Walks through each node within the stylesheet, 
	 * performing a callback on each node of type "word" 
	 * whose property has a quantity value.
	 * 
	 * See the definition of the "word" node type here:
	 * https://github.com/TrySound/postcss-value-parser#word
	 * 
	 * @param stylesheet {String} The stylesheet/CSS to be parsed 
	 * into an object
	 * @param cb {Function} Callback to run on each node. The
	 * node itself, along with the number and unit of the property 
	 * value is passed to the callback.
	 * @return {String} The stylesheet after the modifications
	 */
	modifyQuantityNodes(stylesheet, cb) {

		const parsedStylesheet = valueParser(stylesheet);

		parsedStylesheet.walk(node => {

			const quantity = valueParser.unit(node.value);

			// We only care about nodes that have quantities
			if(utils.isQuantityNode(node, quantity)) {
				cb(node, quantity);
			}
		});
		return parsedStylesheet.toString();
	}

	/**
	 * Performs a callback function on each
	 * quantity node it receives from modifyQuantityNodes.
	 * If the node has a pixel unit, we convert the quantity
	 * to either ems or rems.
	 * 
	 * @param {Object}  
	 */
	convertPixelNodes({
		stylesheet,
		base,
		toUnit,
		shouldPreserveOriginalValues
	}) {
		return this.modifyQuantityNodes(
			stylesheet,
			(node, quantity) => {
	
				// quantity is an object like {number: '2', unit: 'rem'}
				
				if(utils.isPixel(quantity.unit)) {
	
					const newValue = utils.isEm(toUnit)
						? utils.em(base, quantity.number)
						: utils.rem(base, quantity.number);
	
					const originalValueComment = ` /* ${
						utils.removeSemicolons(node.value)
					} */`;
	
					node.value = `${newValue};${
						shouldPreserveOriginalValues
							? originalValueComment
							: ``
					}`;
				}
	
			}
		);
	}

	openModal() {
		this.setState({
			modal: {
				...this.state.modal,
				isOpen: true
			}
		});
	}

	closeModal() {
		this.setState({
			modal: {
				...this.state.modal,
				isOpen: false
			}
		});
	}

	renderModalChildren() {
		const children = {
			settings: Settings,
			help: Help
		};
		const Component = children[
			this.state.modal.activeChild
		];
		return <Component />;
	}

	handleChange(e) {
		console.log(e);
	}

	render() {
		const { 
			userInput,
			result,
			modal,
			base,
			unit,
			shouldPreserveOriginalValues
		} = this.state;

		const ColumnOne = () => 
			<Sidebar 
				base={base}
				unit={unit}
				shouldPreserveOriginalValues={shouldPreserveOriginalValues}
				handleChange={this.handleChange}/>;

		const ColumnTwo = () => (
			<PanelManager>
				<Textarea 
					value={userInput}
					onBeforeChange={this.handleUserInputChange}
					autoFocus={true}
				/>
				<Textarea 
					value={result}
					readOnly={true}
					cursorBlinkRate={-1}
				/>
			</PanelManager>
		);

		return(
			<Fragment>
				<Modal
					isOpen={modal.isOpen}
					onRequestClose={this.closeModal}>
					{this.renderModalChildren()}
				</Modal>
				<TwoColumn 
					columnOneNode={<ColumnOne/>}
					columnTwoNode={<ColumnTwo/>}/>
			</Fragment>
		);
	}
}

export default Editor;