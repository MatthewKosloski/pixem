import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Label } from '../../atoms';
import Tooltip from '../Tooltip';

class TooltipLabel extends PureComponent {
    render() {
        const { htmlFor, title, tooltipText } = this.props;
        return React.createElement(
            htmlFor ? Label : Label.withComponent('div'),
            htmlFor ? {htmlFor} : {},
            title,
            tooltipText ? React.createElement(Tooltip, 
                {text: tooltipText}
            ) : null
        );
    }
}

TooltipLabel.propTypes = {
    htmlFor: PropTypes.string,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string
};

export default TooltipLabel;