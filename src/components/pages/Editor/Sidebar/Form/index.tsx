import * as React from 'react';

import { TooltipLabel, Media } from '@molecules';

import BaseInput from './BaseInput';
import UnitInput from './UnitInput';
import ShouldPreserveOriginalValuesInput from './ShouldPreserveOriginalValuesInput';
import { FormItem, MobileForm } from './Styles';

export interface IPropTypes {
    isMobileFormVisible: boolean;
    base: string;
    unit: string;
    shouldPreserveOriginalValues: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
            handleChange
        } = this.props;
        return(
            <React.Fragment>
                <FormItem>
                    <TooltipLabel
                        htmlFor="base"
                        title="Base Pixel Size"
                        tooltipText={'This should be the same as the root font-size on your webpage.  The default for most web browsers is 16 pixels.  This must be an integer or floating-point greater than zero.'}
                        useParagraph={isMobile} />
                    <BaseInput
                        value={base}
                        onChange={handleChange} />	
                </FormItem>
                <FormItem>
                    <TooltipLabel
                        title="Conversion Unit"
                        tooltipText={'Choose a unit to convert pixel values to—em or rem.  The former is relative to the font-size of the direct parent and the latter is relative to the font-size of the root element.'}
                        useParagraph={isMobile} />
                    <UnitInput
                        unit={unit}
                        onChange={handleChange} />
                </FormItem>
                <FormItem>
                    <TooltipLabel
                        htmlFor="shouldPreserveOriginalValues"
                        title="Preserve Original Values"
                        tooltipText={'Check whether to preserve original values with CSS comments.  This simply means that the original pixel value before the conversion is preserved in a comment next to the converted value.'}
                        useParagraph={isMobile} />
                    <ShouldPreserveOriginalValuesInput
                        checked={shouldPreserveOriginalValues}
                        onChange={handleChange} />
                </FormItem>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Media>
                {(isDesktop: boolean) =>
                isDesktop ? (
                    <React.Fragment>
                        {this.renderChildren()}
                    </React.Fragment>
                ): (
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