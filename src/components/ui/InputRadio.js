import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';

import Label from './Label';

const InputRadio = ({title, name, value, checked, onChange}) => {
    const id = randomstring.generate();
    return (
        <Fragment>
            <Label
                htmlFor={id}
                title={title}/>
            <input 
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </Fragment>
    );
};

InputRadio.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputRadio;