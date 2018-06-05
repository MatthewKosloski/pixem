import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({id, name, value, onChange}) => {
    return (
        <input 
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputText;