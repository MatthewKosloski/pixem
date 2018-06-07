import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'rebass';
import styled from 'styled-components';

import { _vrrem } from '../../util-wrappers';

import StyledLabel from './StyledLabel';

const StyledIcon = styled('div')`
    background-color: ${props => props.theme.colors.shakespeare};
    border-radius: 100%;
    width: 18px;
    height: 18px;
    margin-left: ${_vrrem(0.5)};
    text-align: center;
`;

const icon = (
    <svg 
        width="5.8" 
        height="9" 
        viewBox="0 0 5.8 9" 
        xmlns="http://www.w3.org/2000/svg">
            <title>Question Mark</title>
            <path 
                d="M5.132 1.117C4.562.707 3.846.5 2.985.5c-.656 0-1.21.145-1.66.434C.614 1.387.234 2.156.19 3.24H1.84c0-.315.093-.62.277-.912.185-.294.498-.44.94-.44.448 0 .757.12.926.357.17.238.254.502.254.79 0 .252-.126.482-.278.692-.085.122-.195.234-.332.337 0 0-.896.575-1.29 1.036-.228.27-.248.67-.27 1.245 0 .04.016.126.16.126h1.285c.127 0 .154-.094.156-.135.008-.21.03-.317.07-.438.072-.23.268-.428.49-.6l.454-.314c.41-.32.738-.582.883-.788.247-.34.42-.756.42-1.25 0-.808-.285-1.417-.855-1.828zM2.958 7.462c-.57-.017-1.04.377-1.058.995-.018.618.43 1.026 1 1.042.594.017 1.052-.364 1.07-.982.017-.618-.417-1.04-1.012-1.056z" 
                fill="#fff"
                fillRule="evenodd" />
    </svg>
);

const Label = ({htmlFor, title, tooltipText}) => {
    return (
        <StyledLabel htmlFor={htmlFor}>
                {title} 
                {tooltipText && 
                    <Tooltip text={tooltipText}>
                        <StyledIcon>
                            {icon}
                        </StyledIcon>
                    </Tooltip>}
        </StyledLabel>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string
};

export default Label;