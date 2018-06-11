import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './StyledContainer';
import StyledCheckbox from './StyledCheckbox';
import StyledCheckboxLabel from './StyledCheckboxLabel';
import Icon from './Icon';

const InputCheckbox = ({id, name, checked, onChange}) => {
    return (
        <StyledContainer>
            <StyledCheckbox 
                type="checkbox"
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <StyledCheckboxLabel htmlFor={id}>
                <Icon />
            </StyledCheckboxLabel>
        </StyledContainer>
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputCheckbox;