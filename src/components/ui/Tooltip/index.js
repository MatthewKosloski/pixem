import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import random from 'randomstring';

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
                        <svg 
                            width="5.8" 
                            height="9" 
                            viewBox="0 0 5.8 9" 
                            xmlns="http://www.w3.org/2000/svg">
                                <title>Help</title>
                                <path 
                                    d="M5.132 1.117C4.562.707 3.846.5 2.985.5c-.656 0-1.21.145-1.66.434C.614 1.387.234 2.156.19 3.24H1.84c0-.315.093-.62.277-.912.185-.294.498-.44.94-.44.448 0 .757.12.926.357.17.238.254.502.254.79 0 .252-.126.482-.278.692-.085.122-.195.234-.332.337 0 0-.896.575-1.29 1.036-.228.27-.248.67-.27 1.245 0 .04.016.126.16.126h1.285c.127 0 .154-.094.156-.135.008-.21.03-.317.07-.438.072-.23.268-.428.49-.6l.454-.314c.41-.32.738-.582.883-.788.247-.34.42-.756.42-1.25 0-.808-.285-1.417-.855-1.828zM2.958 7.462c-.57-.017-1.04.377-1.058.995-.018.618.43 1.026 1 1.042.594.017 1.052-.364 1.07-.982.017-.618-.417-1.04-1.012-1.056z" 
                                    fill="#fff"
                                    fillRule="evenodd" />
                        </svg>
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