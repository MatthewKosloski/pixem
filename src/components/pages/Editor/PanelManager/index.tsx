import * as React from 'react';
import * as Split from 'split.js';

import Panel from './Panel';
import StyledContainer from './StyledContainer';

import { getIdSequence } from '@utils';

class PanelManager extends React.Component {

    componentDidMount() {
        const elements = this.getPanelIds(
            React.Children.count(this.props.children), true);

        const options = {
            gutterSize: 2,
            minSize: 200,
            direction: 'vertical',
            elementStyle: (_: 'width' | 'height', 
            size: number, gutterSize: number) => ({
                'flex-basis': `calc(${size}% - ${gutterSize}px)`
            }),
            gutterStyle: (_: 'width' | 'height', gutterSize: number) => ({
                'flex-basis': `${gutterSize}px`
            })
        };

        Split(elements, options);
    }

    /**
     * Returns an array of ids to be used for the children.
    */
    private getPanelIds(quantity: number, hasHash: boolean = false): string[] {
        const ids = getIdSequence(quantity, 'panelmanager-panel');

        return hasHash 
            ? ids.map(id => `#${id}`)
            : ids; 
    }  

    render() {
        const panelIds = this.getPanelIds(
            React.Children.count(this.props.children));

        return (
            <StyledContainer>
                {React.Children.map(this.props.children, (child, index) =>
                    Panel({child, id: panelIds[index]}))}
            </StyledContainer>  
        );
    }

}

export default PanelManager;