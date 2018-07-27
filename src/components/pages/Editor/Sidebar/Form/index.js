import React, { Fragment, PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { _vrrem } from '../../../../../util-wrappers';
import { TooltipLabel } from '../../../../molecules';

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

const StyledMobileForm = styled('div')`${
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
        z-index: 5;
        visiblity: ${isMobileFormVisible ? 'visible' : 'hidden'};
    `
}`;

class Form extends PureComponent {

    constructor(props) {
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }

    renderChildren() {
        const {
            base,
            unit,
            shouldPreserveOriginalValues,
            handleChange,
            isMobile  
        } = this.props;
        return(
            <Fragment>
                <StyledFormItem>
                    <TooltipLabel
                        htmlFor="base"
                        title="Base Pixel Size"
                        tooltipText={'Tooltip text here'}
                        useParagraph={isMobile} />
                    <BaseInput
                        value={base}
                        onChange={handleChange} />	
                </StyledFormItem>
                <StyledFormItem>
                    <TooltipLabel
                        title="Conversion Unit"
                        tooltipText={'Tooltip text here'}
                        useParagraph={isMobile} />
                    <UnitInput
                        unit={unit}
                        onChange={handleChange} />
                </StyledFormItem>
                <StyledFormItem>
                    <TooltipLabel
                        htmlFor="shouldPreserveOriginalValues"
                        title="Conversion Unit"
                        tooltipText={'Tooltip text here'}
                        useParagraph={isMobile} />
                    <ShouldPreserveOriginalValuesInput
                        checked={shouldPreserveOriginalValues}
                        onChange={handleChange} />
                </StyledFormItem>
            </Fragment>
        );
    }

    render() {
        return (
            <Fragment>
                {this.props.isMobile ? (
                    <StyledMobileForm {...this.props}>
                        {this.renderChildren()}
                    </StyledMobileForm>
                    ) : (
                     <Fragment>
                        {this.renderChildren()}
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default Form;