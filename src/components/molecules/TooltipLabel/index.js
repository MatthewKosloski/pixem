import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Label } from '../../atoms';
import Tooltip from '../Tooltip';

class TooltipLabel extends PureComponent {
    render() {
        const { htmlFor, title, tooltipText } = this.props;
        return (
            <Label htmlFor={htmlFor}>
                    {title} 
                    {tooltipText && <Tooltip text={tooltipText} />}
            </Label>
        );
    }
}

TooltipLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string
};

export default TooltipLabel;