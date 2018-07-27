import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { _vrrem } from '../../../util-wrappers';
import { Label } from '../../atoms';
import Tooltip from '../Tooltip';

const MobileLabel = Label.extend`${
    ({theme: {colors: {white}, media: {md}}}) => css`
        color: ${white};
        margin-bottom: ${_vrrem(0.25)};
        @media ${md} {
            margin-bottom: ${_vrrem(1)};
            color: inherit;
        }
    `
}
`;

const Paragraph = styled('p')`
    margin-bottom: ${_vrrem(1)};
`;

/**
 * Calls withComponent on $styledComponent with  
 * $component if $condition is true.
 * 
 * @param {StyledComponent} styledComponent 
 * @param {string} component 
 * @param {boolean} condition 
 * @returns {StyledComponent}
 */
const withComponentConditional = (styledComponent, component, condition) => {
    return condition 
        ? styledComponent.withComponent(component)
        : styledComponent;
};

class TooltipLabel extends PureComponent {
    render() {
        const { 
            htmlFor, 
            title, 
            tooltipText, 
            useParagraph, 
        } = this.props;

        const type = withComponentConditional(MobileLabel, 'div', !htmlFor);
        const props = htmlFor ? {htmlFor} : null;
        let children = [title];

        const TooltipComponent = React.createElement(Tooltip, {text: tooltipText});

        if(useParagraph) {
            return React.createElement(
                'div',
                null,
                React.createElement(type, props, ...children),
                React.createElement(Paragraph, null, tooltipText)
            );
        } else {
            if(tooltipText) {
                children.push(TooltipComponent);
            }
            return React.createElement(type, props, ...children);
        }

    }
}

TooltipLabel.propTypes = {
    htmlFor: PropTypes.string,
    title: PropTypes.string.isRequired,
    tooltipText: PropTypes.string,
    useParagraph: PropTypes.bool
};

TooltipLabel.defaultProps = {
    useParagraph: false
};

export default TooltipLabel;