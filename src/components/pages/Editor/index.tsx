import * as React from 'react';
import * as valueParser from 'postcss-value-parser';

import * as utils from '@utils';

import { TwoColumnTemplate } from '@templates';

import Sidebar from './Sidebar';
import PanelManager from './PanelManager';
import Textarea from './Textarea';

const defaultUserInput = `.my_awesome_class {
	margin: 16px 24px;
	font: 18px/1.3 'Open Sans', sans-serif;
	padding: 48px 0 144px;
	color: #df4747;
	text-align: center;
	display: flex;
}`;  

interface IValueParserNode {
	type:
		'word' |
		'string' |
		'div' |
		'space' |
		'comment' |
		'function';
	value: any; // predicated on type, so I use any for now
	sourceIndex: number;
}

interface IState {
	userInput: string;
	result: string;
	base: string;
	unit: string;
	affectedProps: string;
	shouldPreserveOriginalValues: boolean;
}

class Editor extends React.Component<{}, IState> {

	constructor(props: {}) {
		super(props);

		this.state = {
			userInput: defaultUserInput,
			result: '',
			base: '16',
			unit: 'em',
			affectedProps: '',
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
	* 	emRem('16', '16px', 'em', false)
	*/
	private emRem(
		base: string, 
		px: string, 
		isEm: boolean = true
	): string {
		const pxRegex = /(\d+)(px;?)/;
		
		if(!pxRegex.test(px)) return;
		
		const result = pxRegex.exec(px);

		const number = utils.dynamicPrecision(Number(result[1]) / Number(base));
		const unit = result[2].replace(/px/, isEm ? 'em' : 'rem');
		
		return `${number}${unit}`;
	}

	/**
	*	Predicated on a provided base size, it
	*	converts a pixel string to an em string.
	*
	*	@example
	* 	// returns '1em'
	* 	em('16', '16px')
	*/
	private em(
		base: string, 
		px: string
	): string {
		return this.emRem(base, px);
	}

	/**
	*	Predicated on a provided base size, it
	*	converts a pixel string to a rem string.
	*
	*	@example
	* 	// returns '1rem'
	* 	rem('16', '16px')
	*/
	private rem(
		base: string, 
		px: string
	): string {
		return this.emRem(base, px, false);
	}

	/**
	 * When the user pastes in CSS into
	 * the editable textarea, the value is
	 * stored in userInput.  After we have
	 * the user's code, we get the converted
	 * result.
	 */
	private handleUserInputChange(
		editor: any, 
		data: any, 
		value: any
	): void {
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
	 */
	private makeCSSComment(
		str: string
	): string {
		return `/* ${str} */`;
	}

	/**
	 * Returns a boolean indicating if $node
	 * is a CSS property (e.g., "padding:")
	 */
	private isPropertyNode(
		node: IValueParserNode, 
		index: number, 
		nodes: IValueParserNode[]
	): boolean {
		const nextNode = nodes[index + 1];
		if(nextNode === undefined) return;
		return node.type === 'word' && 
			nextNode.type === 'div' && 
			nextNode.value === ':';
	}

	/**
	 * Keeps incrementing $index until it finds another
	 * CSS property within $nodes.
	 */
	private getNextPropertyNode(
		node: IValueParserNode, 
		index: number, 
		nodes: IValueParserNode[]
	): IValueParserNode {
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
	 * Returns a boolean indicating if the node's
	 * CSS property (e.g., "margin") is in the
	 * list of affected properties.
	 */
	private isAffectedPropNode(
		node: IValueParserNode, 
		affectedProps: string
	): boolean {
		const affectedPropsArray = affectedProps.split(', ');
		const { type, value } = node;
		return type === 'word' && 
		affectedPropsArray.indexOf(value) !== -1;
	}

	/**
	 * Takes in a stylesheet with pixel (px)
	 * values and returns a stylesheet with
	 * converted values in ems or rems.
	 */
	private convertPixelNodes(
		userInput: string,
		shouldPreserveOriginalValues: boolean,
		unit: string,
		base: string,
		affectedProps: string
	): string {
		const pxRegex = /(\d+)(px;?)/;
        const parsedStylesheet = valueParser(userInput); 

        parsedStylesheet.walk((
			node: IValueParserNode, 
			index: number, 
			nodes: IValueParserNode[]
		) => {

			const hasAffectedProps = affectedProps.length != 0;

			if(!this.isAffectedPropNode(node, affectedProps)
		&& hasAffectedProps) return;

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

				let values: string[] = [], 
					indices: number[] = [];

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
	 */
	private getResult(): string {
		const {
			userInput,
			shouldPreserveOriginalValues,
			unit,
			base,
			affectedProps
		} = this.state;
		return this.convertPixelNodes(
			userInput,
			shouldPreserveOriginalValues,
			unit,
			base,
			affectedProps
		);
	}

	/**
	 * The one event handler responsible for
	 * setting the state.
	 */
	private handleChange(e: React.ChangeEvent<HTMLInputElement> 
		| React.ChangeEvent<HTMLTextAreaElement>) {
		const { type, checked, value, name } = e.target;

		if(this.canSetState(name, value)) {
			this.setState({
				[name as any]: type === 'checkbox' 
					? checked 
					: value,
			}, () => {
				if(this.canSetResult(name, value)) {
					this.setState({
						result: this.getResult()
					});
				}
			});
		}
	}

	/**
	 * Validation done prior to setting the state and
	 * updating values of the controlled inputs.
	 */
	private canSetState(name: string, value: string) {
		switch(name) {
			case 'base':
				return utils.isNumber(value);
				break;
			default:
				return true;
		}
	}

	/**
	 * Validation done prior to setting the result
	 */
	private canSetResult(name: string, value: string) {
		switch(name) {
			case 'base':
				return utils.isPositiveNumber(value) && 
				utils.isNotEmptyString(value);
				break;
			default:
				return true;
		}
	}

	/**
	 * Renders the sidebar.
	*/
	private renderFirstColumn(): React.ReactNode {
		const {
			userInput,
			result,
			...rest
		} = this.state;

		return (
			<Sidebar 
				handleChange={this.handleChange}
				{...rest}/>
		);
	}

	/**
	 * Renders the two textareas.
	 * 
	 * @return {ReactElement}
	 */
	private renderSecondColumn(): React.ReactNode {
		const { userInput, result } = this.state;

		const EditableTextarea = (
			<Textarea 
				value={userInput}
				onBeforeChange={this.handleUserInputChange}
				autoFocus={true}
			/>
		);

		const ReadOnlyTextarea = (
			<Textarea 
				value={result}
				readOnly={true}
				cursorBlinkRate={-1}
				onBeforeChange={() => {}}
			/>
		);

		return (
			<PanelManager 
				panels={[{
					title: 'Your code',
					node: EditableTextarea
				},
				{
					title: 'Result',
					node: ReadOnlyTextarea
				}]}/>
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