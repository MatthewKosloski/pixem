import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StyledLabel from '../StyledLabel';
import Tooltip from '../Tooltip';

class Label extends PureComponent {
    render() {
        const { htmlFor, title, tooltipText } = this.props;
        return (
            <StyledLabel htmlFor={htmlFor}>
                    {title} 
                    {tooltipText && 
                        <Tooltip
                            text={tooltipText} />}
            </StyledLabel>
        );
    }
}

Label.propTypes = {
    htmlFor: PropTypes.string,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string
};

export default Label;