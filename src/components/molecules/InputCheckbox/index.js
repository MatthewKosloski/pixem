import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CheckboxIcon } from '../../atoms';

import StyledContainer from './StyledContainer';
import StyledCheckbox from './StyledCheckbox';
import StyledCheckboxLabel from './StyledCheckboxLabel';

class InputCheckbox extends PureComponent {
    render() {
        const { id, name, checked, onChange } = this.props;
        return (
            <StyledContainer>
                <StyledCheckbox 
                    name={name}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <StyledCheckboxLabel htmlFor={id}>
                    <CheckboxIcon />
                </StyledCheckboxLabel>
            </StyledContainer>
        );
    }
}

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputCheckbox;