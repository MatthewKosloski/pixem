import * as React from 'react';
import * as Split from 'split.js';

import Panel from './Panel';
import { Container } from './Styles';

import { getIdSequence } from '@utils';

interface IPanel {
    title: string;
    node: React.ReactNode;
}

interface IPropTypes {
    panels: IPanel[];
}

class PanelManager extends React.Component<IPropTypes> {

    componentDidMount() {
        const elements = this.getPanelIds(this.props.panels.length, true);

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

    public render() {
        const panelIds = this.getPanelIds(this.props.panels.length);

        return (
            <Container>
                {this.props.panels.map(({node, title}, index) =>
                    Panel({
                        child: node,
                        title: title,
                        id: panelIds[index]
                    }))}
            </Container>  
        );
    }

}

export default PanelManager;