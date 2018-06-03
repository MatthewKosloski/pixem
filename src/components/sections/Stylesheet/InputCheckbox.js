import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({id, name, checked, onChange}) => {
    return (
        <input 
            type="checkbox"
            name={name}
            id={id}
            checked={checked}
            onChange={onChange}
        />
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputCheckbox;