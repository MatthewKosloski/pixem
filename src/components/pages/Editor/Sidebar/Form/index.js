import React from 'react';
import styled from 'styled-components';

import { _vrrem } from '../../../../../util-wrappers';
import {
    TooltipLabel,
    InputText,
    InputRadio
} from '../../../../molecules';

const StyledForm = styled('div')`
    input {
        margin-top: ${_vrrem(1)};
    }
`;

const Form = ({
    base,
    unit,
    shouldPreserveOriginalValues,
    handleChange    
}) => {
    return (
        <StyledForm>
            <TooltipLabel
                htmlFor="base"
                title="Base Pixel Size"
                tooltipText="This is tooltip text" />
            <InputText
                id="base"
                name="base"
                value={base}
                onChange={handleChange} />	
        </StyledForm>
    );
};

export default Form;