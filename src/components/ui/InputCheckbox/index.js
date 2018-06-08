import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './StyledContainer';
import StyledCheckbox from './StyledCheckbox';
import StyledCheckboxLabel from './StyledCheckboxLabel'

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
                <svg 
                    width="16" 
                    height="13" 
                    viewBox="0 0 16 13" 
                    xmlns="http://www.w3.org/2000/svg">
                        <title>Checkbox</title>
                        <path 
                            d="M5.085 9.624L1.292 5.83 0 7.114l5.085 5.085L16 1.283 14.717 0" 
                            fill="#FFF" 
                            fillRule="evenodd" />
                </svg>
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