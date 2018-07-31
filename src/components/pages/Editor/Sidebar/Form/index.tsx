import * as React from 'react';
import styled, { css } from 'styled-components';

import { _vrrem } from '@util-wrappers';
import { TooltipLabel } from '@molecules';

import BaseInput from './BaseInput';
import UnitInput from './UnitInput';
import ShouldPreserveOriginalValuesInput from './ShouldPreserveOriginalValuesInput';

const StyledFormItem = styled('div')`${
    ({theme: {
        colors: {mako},
        media: {md}
    }}) => css`
        border-bottom: 2px solid ${mako};
        margin-bottom: ${_vrrem(1.5)};
        padding: 0 ${_vrrem(1)} ${_vrrem(1)} ${_vrrem(1)};
        @media ${md} {
            border-bottom: none;
            padding-left: 0;
            padding-right: 0;
        }
    `
}`;

interface IPropTypes {
    isMobile: boolean;
    isMobileFormVisible: boolean;
    base: string;
    unit: string;
    shouldPreserveOriginalValues: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledMobileForm = styled('div')<IPropTypes>`${
    ({
        isMobileFormVisible,
        theme: {
            colors: {shark}
        }
    }) => css`
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${shark};
        width: 100%;
        height: 100%;
        padding: ${_vrrem(4)} 0;
        transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
        transform: translateY(${isMobileFormVisible ? '0' : '-100%'});
        opacity: ${isMobileFormVisible ? '1' : '0'};
        z-index: 6;
        visiblity: ${isMobileFormVisible ? 'visible' : 'hidden'};
    `
}`;

class Form extends React.PureComponent<IPropTypes> {

    constructor(props: IPropTypes) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    private renderChildren() {
        const {
            base,
            unit,
            shouldPreserveOriginalValues,
            handleChange,
            isMobile  
        } = this.props;
        return(
            <React.Fragment>
                <StyledFormItem>
                    <TooltipLabel
                        htmlFor="base"
                        title="Base Pixel Size"
                        tooltipText={'This should be the same as the root font-size on your webpage.  The default for most web browsers is 16 pixels.'}
                        useParagraph={isMobile} />
                    <BaseInput
                        value={base}
                        onChange={handleChange} />	
                </StyledFormItem>
                <StyledFormItem>
                    <TooltipLabel
                        title="Conversion Unit"
                        tooltipText={'Choose a unit to convert pixel values to—em or rem.  The former is relative to the font-size of the direct parent and the latter is relative to the font-size of the root element.'}
                        useParagraph={isMobile} />
                    <UnitInput
                        unit={unit}
                        onChange={handleChange} />
                </StyledFormItem>
                <StyledFormItem>
                    <TooltipLabel
                        htmlFor="shouldPreserveOriginalValues"
                        title="Preserve Original Values"
                        tooltipText={'Check whether to preserve original values with CSS comments.  This simply means that the original pixel value before the conversion is preserved in a comment next to the converted value.'}
                        useParagraph={isMobile} />
                    <ShouldPreserveOriginalValuesInput
                        checked={shouldPreserveOriginalValues}
                        onChange={handleChange} />
                </StyledFormItem>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isMobile ? (
                    <StyledMobileForm {...this.props}>
                        {this.renderChildren()}
                    </StyledMobileForm>
                    ) : (
                     <React.Fragment>
                        {this.renderChildren()}
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default Form;