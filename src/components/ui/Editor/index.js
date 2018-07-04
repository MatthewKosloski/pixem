import React, { Component, Fragment } from 'react';
import valueParser from 'postcss-value-parser';

import PanelManager from './PanelManager';
import Textarea from './Textarea';

import { 
	isQuantityNode, 
	isPixel, 
	isEm, 
	em, 
	rem, 
	removeSemicolons } from '../../../utils';

const defaultUserInput = `.title {
	font-size: 23.4px;
	line-height: 1.3;
	width: 80%; 
  }`;  

class Editor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userInput: defaultUserInput,
			result: '',
			base: '16',
			unit: 'em',
			shouldPreserveOriginalValues: true
		};

		this.handleUserInputChange = this.handleUserInputChange.bind(this);
		this.convertUserInput = this.convertUserInput.bind(this);

	}

	handleUserInputChange(editor, data, value) {
		this.setState({userInput: value});
		this.convertUserInput();
	}

	convertUserInput() {
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
			if(isQuantityNode(node, quantity)) {
				cb(node, quantity);
			}
		});
		return parsedStylesheet.toString();
	}

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
				
				if(isPixel(quantity.unit)) {
	
					const newValue = isEm(toUnit)
						? em(base, quantity.number)
						: rem(base, quantity.number);
	
					const originalValueComment = ` /* ${
						removeSemicolons(node.value)
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

	render() {
		const { 
			userInput,
			result
		} = this.state;
		return(
			<Fragment>
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
			</Fragment>
		);
	}

}

export default Editor;