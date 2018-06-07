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
                    width="21" 
                    height="16" 
                    viewBox="0 0 21 16" 
                    xmlns="http://www.w3.org/2000/svg">
                        <title>Shape</title>
                        <path 
                            d="M6.69 12.363l-4.742-4.74L.333 9.224 6.69 15.58 20.332 1.938 18.73.333" 
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