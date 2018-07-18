import React, { Fragment } from 'react';
import styled from 'styled-components';

import { _vrrem } from '../../../../../util-wrappers';
import { Row, Column } from '../../../../atoms';
import {
    TooltipLabel,
    InputText,
    InputRadio,
    InputCheckbox
} from '../../../../molecules';


const StyledFormItem = styled('div')`
    margin-bottom: ${_vrrem(1.5)};
`;

const Form = ({
    base,
    unit,
    shouldPreserveOriginalValues,
    handleChange    
}) => {
    return (
        <Fragment>
            <StyledFormItem>
                <TooltipLabel
                    htmlFor="base"
                    title="Base Pixel Size"
                    tooltipText="This is tooltip text" />
                <InputText
                    id="base"
                    name="base"
                    value={base}
                    onChange={handleChange} />	
            </StyledFormItem>
            <StyledFormItem>
                <TooltipLabel
                    title="Conversion Unit"
                    tooltipText="This is tooltip text" />
                <Row>
                    <Column>
                        <InputRadio
                            title="EMs"
                            name="unit"
                            value={'em'}
                            checked={unit === 'em'}
                            onChange={handleChange} />
                    </Column>
                    <Column>
                        <InputRadio
                            title="REMs"
                            name="unit"
                            value={'rem'}
                            checked={unit === 'rem'}
                            onChange={handleChange} />
                    </Column>
                </Row>
            </StyledFormItem>
            <StyledFormItem>
                <TooltipLabel
                    htmlFor="shouldPreserveOriginalValues"
                    title="Preserve Original Values"
                    tooltipText="This is tooltip text" />
                <InputCheckbox
                    id="shouldPreserveOriginalValues"
                    name="shouldPreserveOriginalValues"
                    checked={shouldPreserveOriginalValues}
                    onChange={handleChange} />
            </StyledFormItem>
        </Fragment>
    );
};

export default Form;