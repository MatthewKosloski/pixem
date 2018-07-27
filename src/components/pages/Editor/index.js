import React, { Component } from 'react';
import valueParser from 'postcss-value-parser';

import * as utils from '../../../utils';

import { TwoColumnTemplate } from '../../templates';

import Sidebar from './Sidebar';
import PanelManager from './PanelManager';
import Textarea from './Textarea';

const defaultUserInput = `.title {
	font-size: 16px;
	line-height: 1.3;
	width: 80%; 
  }

hr {
    border-color: #f05f40;
    border-width: 3px;
    max-width: 50px;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}

section {
    padding: 100px 0;
}

aside {
    padding: 50px 15px;
}
`;  

class Editor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			userInput: defaultUserInput,
			result: '',
			base: '16',
			unit: 'em',
			shouldPreserveOriginalValues: false
		};

		this.handleUserInputChange = this.handleUserInputChange.bind(this);
		this.convertPixelNodes = this.convertPixelNodes.bind(this);
		this.getResult = this.getResult.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderFirstColumn = this.renderFirstColumn.bind(this);
		this.renderSecondColumn = this.renderSecondColumn.bind(this);
	}

	/**
	*	Predicated on a provided base size, it
	*	converts a pixel string to an em or rem string.
	*
	*	@example
	* 	// returns '1rem'
	* 	emRem(16, '16px', 'em', false)
	*
	*	@param {number} base
	*	@param {string} px
	*   @param {boolean} [isEm = true]
	*	@return {string}
	*/
	emRem(base, px, isEm = true) {
		const pxRegex = /(\d+)(px;?)/;
		
		if(!pxRegex.test(px)) return;
		
		const result = pxRegex.exec(px);

		const number = utils.dynamicPrecision(result[1] / base);
		const unit = result[2].replace(/px/, isEm ? 'em' : 'rem');
		
		return `${number}${unit}`;
	}

	/**
	*	Predicated on a provided base size, it
	*	converts a pixel string to an em string.
	*
	*	@example
	* 	// returns '1em'
	* 	em(16, '16px')
	*
	*	@param {number} base
	*	@param {string} px
	*	@return {string}
	*/
	em(base, px) {
		return this.emRem(base, px);
	}

	/**
	*	Predicated on a provided base size, it
	*	converts a pixel string to a rem string.
	*
	*	@example
	* 	// returns '1rem'
	* 	rem(16, '16px')
	*
	*	@param {number} base
	*	@param {string} px
	*	@return {string}
	*/
	rem(base, px) {
		return this.emRem(base, px, false);
	}

	/**
	 * When the user pastes in CSS into
	 * the editable textarea, the value is
	 * stored in userInput.  After we have
	 * the user's code, we get the converted
	 * result.
	 */
	handleUserInputChange(editor, data, value) {
		this.setState({
			userInput: value
		}, () => {
			this.setState({
				result: this.getResult()
			});
		});
	}

	/**
	 * Returns a one-line CSS comment using
	 * the provided string.
	 * @param {string} str 
	 * @return {string}
	 */
	makeCSSComment(str) {
		return `/* ${str} */`;
	}

	/**
	 * Returns a boolean indicating if $node
	 * is a CSS property (e.g., "padding:")
	 * 
	 * @param {object} node
	 * @param {number} index
	 * @param {array} nodes
	 * @return {boolean}
	 */
	isPropertyNode(node, index, nodes) {
		const nextNode = nodes[index + 1];
		if(nextNode === undefined) return;
		return node.type === 'word' && 
			nextNode.type === 'div' && 
			nextNode.value === ':';
	}

	/**
	 * Keeps incrementing $index until it finds another
	 * CSS property within $nodes.
	 * @param {object} node 
	 * @param {index} index 
	 * @param {nodes} nodes 
	 */
	getNextPropertyNode(node, index, nodes) {
		let nextPropertyNode;
		let currIndex = index + 1;
		while(currIndex < nodes.length) {
			let currNode = nodes[currIndex];
			if(this.isPropertyNode(currNode, currIndex, nodes)) {
				nextPropertyNode = currNode;
				break;
			}
			currIndex++;
		}
		return nextPropertyNode;
	}

	/**
	 * Takes in a stylesheet with pixel (px)
	 * values and returns a stylesheet with
	 * converted v
	 * 
	 * @param {object}
	 * @return {string} 
	 */
	convertPixelNodes({
		userInput,
		shouldPreserveOriginalValues,
		unit,
		base
	}) {

		const pxRegex = /(\d+)(px;?)/;
        const parsedStylesheet = valueParser(userInput); 

        parsedStylesheet.walk((node, index, nodes) => {

            if(this.isPropertyNode(node, index, nodes)) {
                let propertyNodeDivider = nodes[index + 1];
                let nextPropertyNode = this.getNextPropertyNode(
					node, index, nodes);

                let propertyNodeDividerIndex = nodes.indexOf(
					propertyNodeDivider);

                let nextPropertyNodeIndex = nodes.indexOf(
					nextPropertyNode);

                let currIndex = propertyNodeDividerIndex + 1;

                let endIndex = nextPropertyNodeIndex === -1 
                    ? nodes.length 
                    : nextPropertyNodeIndex - 1;

                let values = [], indices = [];
                while(currIndex < endIndex) {
                    let currNode = nodes[currIndex];
                    let quantity = valueParser.unit(currNode.value);
                    if(currNode.type === 'word' && quantity) {
                        values.push(currNode.value);
                        indices.push(currIndex);
                        if(pxRegex.test(currNode.value)) {
                            currNode.value = utils.isEm(unit) 
                                ? this.em(base, currNode.value) 
                                : this.rem(base, currNode.value);
                        }
                    }
                    currIndex++;
                }

                if(shouldPreserveOriginalValues) {
                    let lastIndex = utils.getLastArrayItem(indices);
                    if(lastIndex !== undefined) {
                        let comment = this.makeCSSComment(
                            utils.stripSemicolons(String(values.join(' '))));
                        // only add comments for px values
                        if(pxRegex.test(comment)) {
                            nodes[lastIndex].value += ` ${comment}`;
                        }
                    }
                }
            }

		});
		
		return valueParser.stringify(parsedStylesheet);
	}

	/**
	 * Passes in the state to convertPixelNodes
	 * and returns the result.
	 * 
	 * @return {string}
	 */
	getResult() {
		const {
			userInput,
			shouldPreserveOriginalValues,
			unit,
			base
		} = this.state;
		return this.convertPixelNodes({
			userInput,
			shouldPreserveOriginalValues,
			unit,
			base
		});
	}

	/**
	 * The one event handler responsible for
	 * setting the state.
	 */
	handleChange(e) {
		const { type, checked, value, name } = e.target;
		this.setState({
			[name]: type === 'checkbox' 
				? checked 
				: value,
		}, () => {
			this.setState({
				result: this.getResult()
			});
		});
	}

	/**
	 * Renders the sidebar.
	 * 
	 * @return {ReactElement}
	 */
	renderFirstColumn() {
		const {
			base,
			unit,
			shouldPreserveOriginalValues
		} = this.state;

		return (
			<Sidebar 
				base={base}
				unit={unit}
				shouldPreserveOriginalValues={shouldPreserveOriginalValues}
				handleChange={this.handleChange}/>
		);
	}

	/**
	 * Renders the two textareas.
	 * 
	 * @return {ReactElement}
	 */
	renderSecondColumn() {
		const { userInput, result } = this.state;
		return (
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
	}

	render() {
		return(
			<TwoColumnTemplate 
				firstColumn={this.renderFirstColumn()}
				secondColumn={this.renderSecondColumn()}/>
		);
	}
}

export default Editor;