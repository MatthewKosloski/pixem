import React, { Component } from 'react';
import Split from 'split.js';

import Panel from './Panel';
import StyledContainer from './StyledContainer';

import { getIdSequence } from '../../../../utils';

/**
 * Returns an array of ids to be used for the children.
 * @param {number} quantity 
 * @param {boolean} [hasHash=false] 
 * @return {Array}
 */
const getPanelIds = (quantity, hasHash = false) => {
    const ids = getIdSequence(quantity, 'panelmanager-panel');

    if(hasHash) {
        return ids.map(id => `#${id}`);
    } else {
        return ids;
    }
};

class PanelManager extends Component {

    componentDidMount() {
        const elements = getPanelIds(
            React.Children.count(this.props.children), true);

        const options = {
            gutterSize: 2,
            minSize: 200,
            direction: 'vertical',
            elementStyle: (_, size, gutterSize) => ({
                'flex-basis': `calc(${size}% - ${gutterSize}px)`
            }),
            gutterStyle: (_, gutterSize) => ({
                'flex-basis': `${gutterSize}px`
            })
        };

        Split(elements, options);
    }

    render() {
        const panelIds = getPanelIds(
            React.Children.count(this.props.children));

        return (
            <StyledContainer>
                {React.Children.map(this.props.children, (child, index) =>
                    Panel({child, id: panelIds[index]}))}
            </StyledContainer>  
        );
    }

}

PanelManager.propTypes = {
    children: function(props, propName, componentName) {
        const children = props[propName];
        if(React.Children.count(children) < 2) {
            return new Error(`${componentName} must have at least two children.`);
        }
    }
};

export default PanelManager;