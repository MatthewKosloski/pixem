import * as React from 'react';

import { TooltipLabel, Media } from '@molecules';
import { editor } from '@data';

import BaseInput from './BaseInput';
import UnitInput from './UnitInput';
import ShouldPreserveOriginalValuesInput from './ShouldPreserveOriginalValuesInput';
import AffectedPropsInput from './AffectedPropsInput';
import { FormItem, MobileForm } from './Styles';
import { IBaseState } from '../..';

const { 
	baseLabel,
	affectedPropsLabel,
	unitLabel,
	shouldPreserveOriginalValuesLabel    
} = editor.form.labels;

export interface IPropTypes extends IBaseState {
	isMobileFormVisible: boolean;
	handleChange: (event: React.ChangeEvent<HTMLInputElement> 
		| React.ChangeEvent<HTMLTextAreaElement>) => void;
}

class Form extends React.PureComponent<IPropTypes> {

	constructor(props: IPropTypes) {
		super(props);
		this.renderChildren = this.renderChildren.bind(this);
	}

	private renderChildren(isMobile: boolean = false) {
		const {
			base,
			unit,
			shouldPreserveOriginalValues,
			handleChange,
			affectedProps
		} = this.props;
		return(
			<React.Fragment>
				<FormItem>
					<TooltipLabel
						htmlFor="base"
						title={baseLabel.title}
						tooltipText={baseLabel.text}
						useParagraph={isMobile} />
					<BaseInput
						value={base}
						onChange={handleChange} />	
				</FormItem>
				<FormItem>
					<TooltipLabel
						htmlFor="affectedProps"
						title={affectedPropsLabel.title}
						tooltipText={affectedPropsLabel.text}
						useParagraph={isMobile} />
					<AffectedPropsInput 
						value={affectedProps}
						onChange={handleChange} />
				</FormItem>
				<FormItem>
					<TooltipLabel
						title={unitLabel.title}
						tooltipText={unitLabel.text}
						useParagraph={isMobile} />
					<UnitInput
						unit={unit}
						onChange={handleChange} />
				</FormItem>
				<FormItem>
					<TooltipLabel
						htmlFor="shouldPreserveOriginalValues"
						title={shouldPreserveOriginalValuesLabel.title}
						tooltipText={shouldPreserveOriginalValuesLabel.text}
						useParagraph={isMobile} />
					<ShouldPreserveOriginalValuesInput
						checked={shouldPreserveOriginalValues}
						onChange={handleChange} />
				</FormItem>
			</React.Fragment>
		);
	}

	public render() {
		return (
			<Media>
				{(isDesktop: boolean) =>
				isDesktop ? (
					<React.Fragment>
						{this.renderChildren()}
					</React.Fragment>
				) : (
					<MobileForm 
						id="sidebar-mobile-form"
						{...this.props}>
						{this.renderChildren(true)}
					</MobileForm>
				)}
			</Media>
		);
	}
}

export default Form;