import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import random from 'randomstring';

import Icon from './icon';
import StyledTooltip from './StyledTooltip';
import StyledIconContainer from './StyledIconContainer';

class Tooltip extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            id: random.generate()
        };
    }

    render() {
        const { text } = this.props;
        const { id } = this.state;
        return (
            <StyledTooltip>
                <button 
                    type="button" 
                    aria-label="More info" 
                    aria-describedby={id}>
                    <StyledIconContainer>
                        <Icon />
                    </StyledIconContainer>
                </button>
                <span 
                    id={id}>
                    {text}
                </span>
            </StyledTooltip>
        );
    }

}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired
};

export default Tooltip;