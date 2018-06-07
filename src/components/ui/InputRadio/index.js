import React from 'react';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';
import { Flex } from 'rebass';

import StyledRadio from './StyledRadio';
import StyledRadioLabel from './StyledRadioLabel';

const InputRadio = ({title, name, value, checked, onChange}) => {
    const id = randomstring.generate();
    return (
        <Flex alignItems="center">
            <StyledRadio 
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <StyledRadioLabel 
                htmlFor={id}>
                {title}
            </StyledRadioLabel>
        </Flex>
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