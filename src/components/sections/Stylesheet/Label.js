import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'rebass';

const Label = ({htmlFor, title, tooltipText}) => {
    return (
        <label htmlFor={htmlFor}>
                {title} 
                {tooltipText && 
                    <Tooltip text={tooltipText}>
                        ?
                    </Tooltip>}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string
};

export default Label;