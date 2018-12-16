import * as React from 'react';

import * as utils from '@utils';

import { TwoColumnTemplate } from '@templates';

import convertStylesheet, { StylesheetUnit } from './convertStylesheet';
import Sidebar from './Sidebar';
import PanelManager from './PanelManager';
import Textarea from './Textarea';

const defaultUserInput = `.my_awesome_class {
	margin: 16px -8.5px 0.3px .9px;
	font: 18px/1.3 'Open Sans', sans-serif;
	padding: 48px 0 144px;
	background: url('foo.png');
}`;  

export interface IBaseState {
	base: string;
	unit: StylesheetUnit;
	affectedProps: string;
	shouldPreserveOriginalValues: boolean;
}

interface IEditorState extends IBaseState {
	userInput: string;
	result: string;
}

class Editor extends React.Component<{}, IEditorState> {

	constructor(props: {}) {
		super(props);

		this.state = {
			affectedProps: '',
			result: '',
			userInput: defaultUserInput,
			unit: StylesheetUnit.em,
			shouldPreserveOriginalValues: false,
			base: '16'
		};

		this.handleUserInputChange = this.handleUserInputChange.bind(this);
		this.getResult = this.getResult.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderFirstColumn = this.renderFirstColumn.bind(this);
		this.renderSecondColumn = this.renderSecondColumn.bind(this);
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
	 * Passes in the state to convertStylesheet
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

		const affectedPropsArr = affectedProps.length 
		? affectedProps.split(',') 
		: [];

		return convertStylesheet(
			userInput,
			shouldPreserveOriginalValues,
			unit,
			Number(base),
			affectedPropsArr
		);
	}

	/**
	 * The one event handler responsible for
	 * setting the state.
	 */
	private handleChange(e: React.ChangeEvent<HTMLInputElement> 
		| React.ChangeEvent<HTMLTextAreaElement>) {
		const { type, checked, value, name } = e.target;

		if (this.canSetState(name, value)) {
			this.setState({
				[name as any]: type === 'checkbox' 
					? checked 
					: value
			}, () => {
				if (this.canSetResult(name, value)) {
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
		switch (name) {
			case 'base':
				return utils.isNumber(value);
			default:
				return true;
		}
	}

	/**
	 * Validation done prior to setting the result
	 */
	private canSetResult(name: string, value: string) {
		switch (name) {
			case 'base':
				return utils.isPositiveNumber(value) && 
				utils.isNotEmptyString(value);
			default:
				return true;
		}
	}

	/*
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
				/* tslint:disable-next-line:no-empty */
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

	public render() {
		return(
			<TwoColumnTemplate 
				firstColumn={this.renderFirstColumn()}
				secondColumn={this.renderSecondColumn()}/>
		);
	}
}

export default Editor;